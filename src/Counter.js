import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    substract() {
        this.setState((state) => {
            return {counter: state.counter-1}
        })
    }

    add() {
        this.setState((state) => {
            return {counter: state.counter+1}
        })
    }

    render() {
        return (
            <div className="counter">
                <div className="counter-display">{this.state.counter}</div>
                <div className="counter-button-container">
                    <button className="counter-button" onClick={() => this.substract()}>-</button>
                </div>
                <div className="counter-button-container">
                    <button className="counter-button" onClick={() => this.add()}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter;