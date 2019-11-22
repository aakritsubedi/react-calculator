import React, {Component} from 'react';

class Button extends Component {
    constructor(){
        super();
        this.state={
            className: '',
            functionName: ''
        }
    }
    display(btnVal){
        console.log('Hello '+this.props.children);
    }
    render(){
        const btn = (
            <button onClick={this.props.onClick} className={this.props.className} >{this.props.children}</button>
        )
        return btn;
    }
}

export default Button;