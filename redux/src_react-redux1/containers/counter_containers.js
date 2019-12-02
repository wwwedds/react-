import Counter from '../components/counter'
import {connect} from 'react-redux'
import {increment,decrement} from '../redux/action_creators'
function mapStateToProps(state) {
  return {count:state}
}
function mpaDispatchToProps(dispatch) {
  return {increment:value=>{dispatch(increment(value))},
    decrement:value=>{dispatch(decrement(value))},
  }
}
export default connect(mapStateToProps,mpaDispatchToProps)(Counter)