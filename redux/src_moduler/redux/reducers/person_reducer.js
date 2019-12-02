
let initState=[{name:AnalyserNode,id:2}];
export default function operaPerson(preState=initState,action) {
   //根据type 和data 决定操作什么
  let {type,data}=action
  
  let newState
     switch (type) {
        case 'increment':
           newState=preState.push(data
           )
           return newState;
     
        default:
         return preState;
     }
  }
