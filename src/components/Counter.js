import React, {Component} from 'react';

export default class Counter extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}