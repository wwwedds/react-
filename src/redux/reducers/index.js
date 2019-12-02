import {combineReducers} from 'redux'
import userinfoReducer from './userInfo_reducer'
export default combineReducers(
{UserInfo:userinfoReducer}
)