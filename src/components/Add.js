import React, {Component} from 'react';


class  Add extends Component{
    
    render(){
        let add = (
            <div className='btn-container'>
                <h4>Add ToDo </h4>
                <input className='todo-title' placeholder='Enter Title' value={this.props.title} onChange={this.props.addTitle} />
                <textarea className='todo-content' placeholder='Enter Description' value={this.props.content} onChange={this.props.addContent}></textarea><br/>
                <button onClick={this.props.onClick}  className='add-btn'>{this.props.children}</button>
            </div>
        );
        return add;
    }
}

export default Add;