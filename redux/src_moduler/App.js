import React,{Component} from 'react'
import CounterContainer from './containers/counter_containers'
import PersonContainer from './containers/person_containers'

export default class App extends Component{
 render(){
  
    return (
      <div>
 <CounterContainer/>
   <PersonContainer/>
      </div>
  
    )
  }
}