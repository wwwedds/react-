import React,{Component} from 'react'
import {Button} from 'antd'
import './css/header.less'
export default class Header extends Component{
  render(){
    return (
     <header className='header'>
       <div className='header-top'>
         <span>欢迎 admin</span>
         <Button size='small'>退出</Button>
       </div>
       <div className='headerfoot'></div>
     </header>

    )
  }
}