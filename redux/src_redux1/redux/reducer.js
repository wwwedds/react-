 //初始化状态
 let initState=0
 
 export default function operAtion(preState=initState,action) {
//根据action 里面的tpye data 决定做什么
let {type,data}=action
let newState
switch (type) {
  case 'increment':
    newState=preState+data
    return newState
  case 'decrement':
    newState=preState-data
    return newState
  default:
      return preState
}




 
}