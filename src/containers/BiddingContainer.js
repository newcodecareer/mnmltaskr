import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import Bidding from '../components/Bidding'

const decorated = reduxForm({ form: 'bidding' })(Bidding)
const selector = formValueSelector('bidding')

export default connect((state) => {
  const offer = selector(state, 'offer')
  return { offer }
})(decorated)
