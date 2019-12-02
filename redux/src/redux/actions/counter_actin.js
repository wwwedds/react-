
export const increment=value=>({type:'increment',data:value*1})
export const decrement=value=>({type:'decrement',data:value*1})
export const incrementAsync=(value,delay)=>{
  return  dispatch=>{
    setTimeout(() => {
       dispatch(increment(value))
    }, delay);
  }
   
  
}
