import axios from 'axios'
import qs from 'querystring'
import {Message} from 'antd'
import NProgress from 'nprogress'
import store from '../redux/store'
const instance = axios.create({
   timeout: 5000
 })
//拦截
instance.interceptors.request.use(function (config) {
  NProgress.start()
  //向请求头设置参数
  console.log(store.getState().UserInfo);
  let {token}=store.getState().UserInfo
  if (token)  config.headers.Authorization = 'atguigu_' + token
  let {
    data,
    method
  } = config
  if (method.toLowerCase() === 'post') {

    if (data instanceof Object) {
      config.data= qs.stringify(data)
    }
  }
  return config;
});
//响应

instance.interceptors.response.use(
  (response)=>{
    console.log(response);
    NProgress.done()
    return response.data;
  }, 
  (error) => {
    NProgress.done()
    Message.error(error.message)
    return new Promise(()=>{})
  }
);

export default instance