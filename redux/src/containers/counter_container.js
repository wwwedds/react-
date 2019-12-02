import Counter from '../components/counter'
import {connect} from 'react-redux'
import {increment,decrement,incrementAsync} from '../redux/actions/counter_actin'
export default connect(
  state=>({count:state}),{increment,decrement,incrementAsync}
)(Counter)
