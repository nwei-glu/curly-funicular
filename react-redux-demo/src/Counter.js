import React from 'react';
class Counter extends React.Component {
  state = { count: 0 }
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset = () => {
    this.setState({
      count: 0
    });
  }
  
  render() {
    return (
      <div>
        <h2>Counter with redux</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}
export default Counter;