import React, {Component} from 'react';

import SearchBar from '../components/SearchBar';
import ToDoList from '../components/todo';
import Add from '../components/Add';

import TODO_LIST_ITEMS from '../constants/constant';

class  ToDo extends Component{
    constructor(){
        super();
        this.task = [];
        this.state = {
            task : this.task,
            title: '',
            content: ''
        }
            
    }
    componentDidMount(){
        this.getTask('all');
    }

    getTask(keyword){
        if(keyword === 'all'){
            TODO_LIST_ITEMS.forEach(items=>{
                if(items.deleted === false){
                    this.task.push(
                        <ToDoList key={items.id} id={items.id} edit={(e)=>this.editToDo(e)} delete={(e)=>this.deleteToDo(e)}><span className='to-do-title'>
                                {items.title}
                            </span>
                            <p className='to-do-desc'>{items.desc}</p>
                        </ToDoList>
                    );
                }
            }); 
        }
        else{
                this.task = [];
                TODO_LIST_ITEMS.forEach(items=>{
                    let title= items.title.toLowerCase();
                    if(title.includes(keyword.toLowerCase()) && items.deleted === false){
                        this.task.push(
                            <ToDoList key={items.id} id={items.id} edit={(e)=>this.editToDo(e)} delete={(e)=>this.deleteToDo(e)}><span className='to-do-title'>
                                {items.title}
                            </span>
                            <p className='to-do-desc'>{items.desc}</p>
                            </ToDoList>
                        );
                    } 
                })
        }
        this.setState({
            task : this.task
        })
    }
    searchToDo(){
        let keyword = document.getElementById('search-key').value;
        this.getTask(keyword);
    }
    editToDo(e){
        let indexOfItems=null;
        let id=e.target.parentElement['id'];
        this.task.forEach(items=>{
            if(id === items.props['id']){
                indexOfItems= this.task.indexOf(items);
            }
        })
        console.log(this.task[indexOfItems].props.children[0]);
        this.setState({
            task: this.task
        })
    }
    isChecked(){
        
    }
    deleteToDo(e){
        let indexOfItems=null;
        let id=e.target.parentElement['id'];
        this.task.forEach(items=>{
            if(id === items.props['id']){
                indexOfItems= this.task.indexOf(items);
                this.task.splice(indexOfItems,1);
            }
        })
        this.setState({
            task: this.task
        })
    }
    addTitle(e){
        this.setState({
            title: e.target.value
        })
    }
    addContent(e){
        this.setState({
            content: e.target.value
        })
    }
    addToDo(){
        let items ={id: this.task.length+1,
        title: this.state.title,
        desc: this.state.content,
        created_at:Date.now(),
        edited_at:Date.now(),
        status:'incomplete',
        deleted:false}
        this.task.push(<ToDoList key={items.id} edit={(e)=>this.editToDo(e)} delete={(e)=>this.deleteToDo(e)}><span className='to-do-title'> {items.title}</span><p className='to-do-desc'> {items.desc}</p></ToDoList>);
        this.setState({
            task: this.task,
        })
    }
    render(){
        let toDoApp=(
            <div className="to-do-wrapper">
                <SearchBar onChange={()=>this.searchToDo()}/>
                <Add title={this.state.title} content={this.state.content} onClick={()=>this.addToDo()} 
                addTitle={(e)=>this.addTitle(e)} addContent={(e)=>this.addContent(e)}>+</Add>
                <h2>To Do List</h2>
                <div className='to-do-container'>
                    <ul>
                        {this.task}
                    </ul>
                </div>
            </div>
        );
        return toDoApp
    }
}

export default ToDo;