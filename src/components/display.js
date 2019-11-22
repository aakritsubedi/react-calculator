import React, {Component} from 'react';


class  Display extends Component{
    render(){
        let display = (
            <div className='display-box'>
                <span className='display-font'>{this.props.value}</span>
            </div>
        )
        return display;
    }
}

export default Display;