import React from "react";

export class Numpad extends React.Component {
  render() {
    return (
      <div className="numpad-container">
        <button onClick={this.props.handleClick} id="one" className="number">1</button>
        <button onClick={this.props.handleClick} id="two" className="number">2</button>
        <button onClick={this.props.handleClick} id="three" className="number">3</button>
        <button onClick={this.props.handleClick} id="four" className="number">4</button>
        <button onClick={this.props.handleClick} id="five" className="number">5</button>
        <button onClick={this.props.handleClick} id="six" className="number">6</button>
        <button onClick={this.props.handleClick} id="seven" className="number">7</button>
        <button onClick={this.props.handleClick} id="eight" className="number">8</button>
        <button onClick={this.props.handleClick} id="nine" className="number">9</button>
        <button onClick={this.props.handleClick} id="zero" className="number">0</button>
        <button onClick={this.props.appendDecimal} id="decimal" className="number">.</button>
        <button onClick={this.props.evaluateMath} id="equals" className="operator">=</button>
        <button onClick={this.props.handleClick} id="subtract" className="operator">-</button>
        <button onClick={this.props.handleClick} id="add" className="operator">+</button>
        <button onClick={this.props.handleClick} id="multiply" className="operator">*</button>
        <button onClick={this.props.handleClick} id="divide" className="operator">/</button>
        <button onClick={this.props.handleClear} id="clear" className="clear">AC</button>
      </div>
    );
  }
}
