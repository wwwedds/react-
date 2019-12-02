import React,{Component} from 'react'
import {increment,decrement} from './redux/action_creators'
export default class App extends Component{


increment=()=>{
  let value=this.refs.selectNumber.value
this.props.store.dispatch(increment(value))

}
decrement=()=>{
 
  let value=this.refs.selectNumber.value
  this.props.store.dispatch(decrement(value))
  
  }
  incrementodd=()=>{
    let value=this.refs.selectNumber.value
    let count=this.props.store.getState()
    if(count%2==1){
      this.props.store.dispatch(increment(value))
    }
   
    }
    incrementasync=()=>{
      let value=this.refs.selectNumber.value
      setTimeout(() => {
        this.props.store.dispatch(increment(value))
      }, 1000);
      }


  render(){
    let count=this.props.store.getState()
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