import React from "react";

export class Numpad extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="parent">
            <button onClick={this.props.handleClick} id="one" className="div1">1</button>
            <button onClick={this.props.handleClick} id="two" className="div2">2</button>
            <button onClick={this.props.handleClick} id="three" className="div3">3</button>
            <button onClick={this.props.handleClick} id="four" className="div4">4</button>
            <button onClick={this.props.handleClick} id="five" className="div5">5</button>
            <button onClick={this.props.handleClick} id="six" className="div6">6</button>
            <button onClick={this.props.handleClick} id="seven" className="div7">7</button>
            <button onClick={this.props.handleClick} id="eight" className="div8">8</button>
            <button onClick={this.props.handleClick} id="nine" className="div9">9</button>
            <button onClick={this.props.handleClick} id="zero" className="div10">0</button>
            <button onClick={this.props.appendDecimal} id="decimal" className="div11">.</button>
            <button onClick={this.props.evaluateMath} id="equals" className="div12">=</button>
            <button onClick={this.props.handleClick} id="subtract" className="div13">-</button>
            <button onClick={this.props.handleClick} id="add" className="div14">+</button>
            <button onClick={this.props.handleClick} id="multiply" className="div15">*</button>
            <button onClick={this.props.handleClick} id="divide" className="div16">/</button>
            <button onClick={this.props.handleClear} id="clear" className="div17">AC</button>
          </div> 
        )
    }
}