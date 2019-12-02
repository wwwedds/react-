//创建store
import {createStore,applyMiddleware} from 'redux'
//引入reduler
import  reducer from '../redux/reducers/counter_reduler'
//引入模块化工具
import {composeWithDevTools} from 'redux-devtools-extension'
//引入异步中间件
import thunk from 'redux-thunk'



export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))