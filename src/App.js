import React from 'react'
import { Numpad } from './Numpad.js'
import { evaluate } from 'mathjs';


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayText: '0',
      displayArray: [],
      mathArray: [],
      outputText: '',
      acceptDecimalInput: true,
    }
    this.evaluateMath = this.evaluateMath.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClick = this.handleClick.bind(this); 
    this.appendDecimal = this.appendDecimal.bind(this);
  }

evaluateMath() {
    let mathString = this.state.outputText;
    
    // Handle consecutive operators, keeping the last operator and the negative sign if present
    mathString = mathString.replace(/([+\-*/])+/g, (match, p1) => p1 === '-' && match.length > 1 ? match.slice(-2) : p1);

    const result = evaluate(mathString);
    this.setState({
        displayText: result.toString(),
        outputText: mathString + ` = ${result}`,
        mathArray: [result.toString()],
        displayArray: [result.toString()],
    });
}


    handleClick(event) {
    const input = event.target.innerText;
    const isDigit = !isNaN(input);

    if (isDigit && this.state.displayText === '0') {
        this.setState({
            displayText: input,
            outputText: input,
            mathArray: [input],
            displayArray: [input],
        });
    } else {
        if (input === '+' || input === '-' || input === '*' || input === '/') {
            this.setState({
                acceptDecimalInput: true,
            });
        }
        this.state.mathArray.push(input);
        this.state.displayArray.push(input);
        this.setState({
            displayText: this.state.displayArray.join(''),
            outputText: this.state.mathArray.join(''),
        });
    }
}



appendDecimal(event) {
    const input = event.target.innerText;
    // Find the index of the last operator in the mathArray
    const lastOperatorIndex = this.state.mathArray.slice().reverse().findIndex(item => isNaN(item) && item !== '.');
    // Calculate the index of the last number in the mathArray
    const lastNumberIndex = lastOperatorIndex >= 0 ? this.state.mathArray.length - lastOperatorIndex - 1 : 0;
    // Get the last number in the mathArray
    const lastNumber = this.state.mathArray.slice(lastNumberIndex).join('');

    // Only add a decimal point if the last number does not already contain one
    if (!lastNumber.includes('.')) {
        this.state.mathArray.push(input);
        this.state.displayArray.push(input);
        this.setState({
            displayText: this.state.displayArray.join(''),
            outputText: this.state.mathArray.join(''),
            acceptDecimalInput: false,
        });
    }
}


  handleClear() {
    this.setState({
      displayText: '0',
      outputText: '',  
      mathArray: [],
      displayArray: [],
    })
  }

  render() {
    return (
      <div>
        <div className="flex-container">
            <p id="output">{this.state.outputText}</p>
            <h3 id="display" className="input">{this.state.displayText}</h3>
        </div>
        <Numpad appendDecimal={this.appendDecimal} evaluateMath={this.evaluateMath} handleClear={this.handleClear} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;