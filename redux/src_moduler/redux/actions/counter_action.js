import {INCREMENT,DECREMENT} from '../axtion.type'
export const increment=value=>({type:INCREMENT,data:value*1})
export const decrement=value=>({type:DECREMENT,data:value*1})
export const incrementAsync=(value,delay)=>{
  return dispatch=>{
    setTimeout(() => {
       dispatch(increment(value))
    }, delay);
  }
 
}