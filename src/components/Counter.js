import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          number: 0
        };
      }
    
    
      increment() {
        this.setState({
          number: this.state.number + 1
        });
      };
      
      decrement() {
        if (this.state.number > 0)
        this.setState({
          number: this.state.number - 1
        });
      };
    
      reset() {
        this.setState({
          number: 0
        });
      };
    render() {
        return (
            <div className="counter">
                <h1>Number: {this.state.number}</h1>
                <button className='inc' onClick={(e) => this.decrement(e)}>substract</button>
                <button className='dec' onClick={(e) => this.increment(e)}>Add</button>
                <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
                
            </div>
        )
    }
}

