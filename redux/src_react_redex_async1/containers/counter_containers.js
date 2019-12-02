import Coutner from '../components/counter'
import {connect} from 'react-redux'
import { increment,decrement,incrementAsync} from '../redux/actions_creators'
export default connect(state=>({count:state}),{increment,decrement,incrementAsync})(Coutner)