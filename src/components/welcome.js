import React, {Component} from 'react';

class Welcome extends Component{
    constructor(){
        super();
        this.state={
            message: `Learning React JS is fun :)`
        }
    }
    changeMsg(){
        this.setState({
            message: 'Thank You Aakrit Subedi'
        })
    }
    
    render(){
        let element = (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={()=>this.changeMsg()}>Aakrit Subedi</button>
            </div>
        );
        return element;
    }
}

export default Welcome;