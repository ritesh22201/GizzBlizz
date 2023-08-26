import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    increment = () => {
        this.setState(prev => ({
            count : prev.count + 1
        }));
    }

    decrement = () => {
        this.setState(prev => ({
            count : prev.count - 1
        }));
    }

    render(){
        const {count} = this.state;
        return <div>
            <h1>{count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button disabled={count == 0} onClick={this.decrement}>Decrement</button>
        </div>
    }
}

export default Counter;