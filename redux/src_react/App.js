import React,{Component} from 'react'
export default class App extends Component{
state={
  count:0
}

increment=()=>{
let {count}=this.state
let value=this.refs.selectNumber.value
this.setState({count:value*1+count})
}
decrement=()=>{
  let {count}=this.state
  let value=this.refs.selectNumber.value
  this.setState({count:count-value*1})
  }
  incrementodd=()=>{
    let {count}=this.state
    let value=this.refs.selectNumber.value
    if(value%2===1){
      this.setState({count:value*1+count})
    }
   
    }
    incrementasync=()=>{
      let {count}=this.state
      let value=this.refs.selectNumber.value
      console.log(value)
      setTimeout(() => {
        this.setState({count:value*1+count})
      }, 1000);
     
      }


  render(){
    let {count}=this.state
    return (
    <div>
       <h3>count{count}</h3>
       <select ref='selectNumber'>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <button onClick={this.increment}>+</button>
       <button onClick={this.decrement}>-</button>
       <button onClick={this.incrementodd}>increment odd</button>
       <button onClick={this.incrementasync}>increment async</button>
    </div>
  
     
    )
  }
}