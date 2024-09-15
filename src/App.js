import React from 'react';
import { Numpad } from './Numpad.js';
import { evaluate } from 'mathjs';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '0',
      displayArray: [],
      mathArray: [],
      outputText: '',
      acceptDecimalInput: true,
    };
    this.evaluateMath = this.evaluateMath.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClick = this.handleClick.bind(this); 
    this.appendDecimal = this.appendDecimal.bind(this);
  }

  

evaluateMath() {
  try {
    let mathString = this.state.outputText;
    mathString = mathString.replace(/([+\-*/])+/g, (match, p1) => p1 === '-' && match.length > 1 ? match.slice(-2) : p1);
    const result = evaluate(mathString);

    // Limit result length for display
    const limitedResult = result.toString().length > 12 ? result.toExponential(5) : result.toString();

    this.setState({
      displayText: limitedResult,
      outputText: mathString + ` = ${limitedResult}`,
      mathArray: [limitedResult],
      displayArray: [limitedResult],
    });
  } catch (error) {
    this.setState({
      displayText: 'Error',
      outputText: '',
      mathArray: [],
      displayArray: [],
    });
  }
}

handleClick(event) {
  const input = event.target.innerText;
  const isDigit = !isNaN(input);

  // Prevent expanding the width of the calculator
  if (this.state.displayArray.join('').length > 12) {
    return; // Prevent further input if the display limit is reached
  }

  if (isDigit && this.state.displayText === '0') {
    this.setState({
      displayText: input,
      outputText: input,
      mathArray: [input],
      displayArray: [input],
    });
  } else {
    if (['+', '-', '*', '/'].includes(input)) {
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
    const lastOperatorIndex = this.state.mathArray.slice().reverse().findIndex(item => isNaN(item) && item !== '.');
    const lastNumberIndex = lastOperatorIndex >= 0 ? this.state.mathArray.length - lastOperatorIndex - 1 : 0;
    const lastNumber = this.state.mathArray.slice(lastNumberIndex).join('');

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
    });
  }

  render() {
    return (
      <div className="container">
        <div className="display-container">
          <p className="output-text">{this.state.outputText}</p>
          <h3 id="display" className="display-text">{this.state.displayText}</h3>
        </div>
        <Numpad 
          appendDecimal={this.appendDecimal} 
          evaluateMath={this.evaluateMath} 
          handleClear={this.handleClear} 
          handleClick={this.handleClick} 
        />
      </div>
    );
  }
}

export default App;