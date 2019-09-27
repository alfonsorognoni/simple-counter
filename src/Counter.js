import React from 'react';
import './Counter.css';
import Button from './Button';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    substract() {
        this.setState((state) => {
            return (state.counter > 0) ? {counter: state.counter-1} : {counter: state.counter};
        });
    }

    add() {
        this.setState((state) => {
            return {counter: state.counter+1};
        });
    }

    render() {
        return (
            <div className="counter">
                <div className="counter-display">{this.state.counter}</div>
                <Button className="counter-button-container" onClick={() => this.substract()} icon="-" />
                <Button className="counter-button-container" onClick={() => this.add()} icon="+" />
            </div>
        )
    }
}

export default Counter;