import {SAVE_USER_INFO,DELE_USER_INFO} from '../action_types'
//定义方法
export const  login =(value)=>{
  localStorage.setItem('user',JSON.stringify(value.user))
  localStorage.setItem('token',value.token)
  return {
  type:SAVE_USER_INFO,data:value}}
//退出登录
export const  layout =()=>{
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  return {type:DELE_USER_INFO}}