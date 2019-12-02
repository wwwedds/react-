import React,{Component} from 'react'
export default class Counter extends Component{
increment=()=>{
let value=this.refs.selectNumber.value
this.props.increment(value)
}
decrement=()=>{
  let value=this.refs.selectNumber.value
  this.props.decrement(value)
  }
  incrementodd=()=>{
   
    let value=this.refs.selectNumber.value
    let {count}=this.props
    if(count%2===1){
      this.props.decrement(value)
    }
   
    }
    incrementasync=()=>{
     
      let value=this.refs.selectNumber.value
      
     this.props.incrementAsync(value,1000)
     
      }


  render(){
    let {count}=this.props
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