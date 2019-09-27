import React from 'react';
import './Counter.css';
import Button from './Button';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.updateCounter = this.updateCounter.bind(this);
    }

    onlyIntegerNumber(value) {
        const re = /^[0-9\b]+$/;
        return re.test(value);
    }

    updateCounter(event) {
        if(event.type === 'change') {
            if (this.onlyIntegerNumber(event.target.value)) {
                this.setState({counter: event.target.value});
            }
        } else {
            if(event.target.textContent === '+') {
                this.setState((state) => {
                    return {counter: parseFloat(state.counter)+1};
                });
            } else {
                this.setState((state) => {
                    return (state.counter > 0) ? {counter: parseFloat(state.counter)-1} : {counter: state.counter};
                });
            }
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="counter">
                <input type="text" onChange={this.updateCounter} className="counter-display" value={this.state.counter} />
                <Button className="counter-button-container" onClick={this.updateCounter} icon="-" />
                <Button className="counter-button-container" onClick={this.updateCounter} icon="+" />
            </div>
        )
    }
}

export default Counter;