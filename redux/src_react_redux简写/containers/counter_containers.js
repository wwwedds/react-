import Coutner from '../components/counter'
import {connect} from 'react-redux'
import { increment,decrement} from '../redux/actions_creators'
export default connect(state=>({count:state}),{increment,decrement})(Coutner)