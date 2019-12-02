import React,{Component} from 'react'

export default class Person extends Component{
submit=()=>{
let name =this.refs.name
let id = this.refs.id 
this.props.increment({name,id})
}
  render(){
    let {person}=this.props.count
    console.log(this.props)
    return (
     <div>

      用户名：<input type="text" ref='name'/>
      个人id：<input type="text" ref='id'/>
      <input type="submit" onClick={this.submit}/>
      <ul>
        {
          person[0].map(
            (item)=>{
              return <li key={item.id}>用户名：{item.name};个人id：{item.id}</li>
            }
            )
        }

      </ul>

     </div>
    )
  }
}