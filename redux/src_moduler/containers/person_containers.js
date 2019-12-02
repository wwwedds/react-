import Person from '../components/person'
import {connect} from 'react-redux'
import { increment} from '../redux/actions/person_action'
export default connect(state=>({count:state}),{increment})(Person)