import React from 'react';
import { connect } from "react-redux";
import { increment, decrement, reset } from "./action"

class Counter extends React.Component {

  increment = () => {
    this.props.dispatch(increment());

    // if you have map dispatchToProps, you can do this.props.increment()
  }
  
  decrement = () => {
    this.props.dispatch(decrement());  
    
    // if you have map dispatchToProps, you can do this.props.decrement()
  }

  reset = () => {
    this.props.dispatch(reset());
   
    // if you have map dispatchToProps, you can do this.props.reset()
  }
  
  render() {
    return (
      <div>
        <h2>Counter with redux</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);


// if you don't want to type the dispatch function, use mapDispatchToProps to save time

// const mapDispatchToProps = {
//   increment, 
//   decrement,
//   reset
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);