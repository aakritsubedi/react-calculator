import React, {Component} from 'react';


class  ToDoList extends Component{
    render(){
        let list = (
            <li className='todo-items' id={this.props.id}>
                <input type='checkbox'  className='checkbox'/>
                {this.props.children}
                <button className='btn' onClick={this.props.edit}>Edit</button> 
                <button className='btn' onClick={this.props.delete}>Delete</button>
            </li>
        );
        return list;
    }
}

export default ToDoList;