import React,{Component} from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Display from './components/display'
import Button from './components/button';
import Evaluate from './components/evaluate';

class App extends Component{
  constructor(){
    super();
    this.btn=['(',')','+','-','*','/','^','9','8','7','6','5','4','3','2','1','0','.']; 
    this.state={
      displayValue: ''
    }
  }
  updateDisplay(value){
    this.setState({
      displayValue:  this.state.displayValue + value
    })
  }
  compute(){
    let result = new Evaluate(this.state.displayValue).getResult()
    this.setState({
      displayValue: result
    })
  }
  clear(){
    this.setState({
      displayValue: ''
    })
  }
  render(){
    return (
      <div className="app">
        <Display value={this.state.displayValue} />
        <Button onClick={()=>this.clear()} className='btn clear-btn'>AC</Button>
        <div>
        {this.btn.map((value)=>{
          return (<Button onClick={()=>this.updateDisplay(value)} className='btn'>{value}</Button>)
        })}
        </div>
        <Button onClick={()=>this.compute()} className='btn equal-btn'>=</Button>
      </div>
    );
  }
}

export default App;
