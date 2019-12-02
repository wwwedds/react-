import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd'
import {qsCategory} from '../../api/index'
import Header from './header/header'
import './css/admin.less'
import {layout} from '../../redux/actions/login_actions'
import Bar  from '../bar/bar'
import Category from '../category/category'
import Home from '../../components/home/home'
import  Line from '../line/line.js'
import  Pie from '../pie/pie'
import  Product from '../product/product'
import    Role  from '../role/role.js'
import   User    from '../user/user'
const {Footer, Sider, Content } = Layout;

@connect(state=>({createUserInfo:state.UserInfo}),{deceleUserInfo:layout})

 class Admin extends Component{
  layout=()=>{
    this.props.deceleUserInfo()
  }

  render(){
    const { isLogin}=this.props.createUserInfo
    if(!isLogin) {
      return <Redirect to='/login'/>
    }
    return (
      <Layout className='admin'>
     
      <Sider>
        
        Sider</Sider>
      <Layout>
        <Header>Header
        <button onClick={this.layout}>退出</button>
        </Header>
        <Content>
          <Switch>
          <Route path='/admin/home'component= {Home}/>
          <Route path='/admin/prod_about/category'component= {Category}/>
          </Switch>
          
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
  }
}
export default Admin