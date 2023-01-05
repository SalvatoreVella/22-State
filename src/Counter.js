import React from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends React.Component {
    state = {
        counter: this.props.initialValue ?? 0,
    }
    constructor(props) {
        super(props) 

        setInterval(() => {
            this.setState( prevState => {
                 return {counter: this.state.counter + (this.props.increment ?? 1)} 
            }
            )
        }, this.props.interval || 1000);
    }


    
    render() {
        return <CounterDisplay counter = {this.state.counter}/>
    }
}