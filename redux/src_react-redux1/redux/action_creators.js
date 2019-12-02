import {INCREMENT,DECREMENT} from './action_type'
export const increment=value=>({type:INCREMENT,data:value*1})
export const decrement=value=>({type:DECREMENT,data:value*1})