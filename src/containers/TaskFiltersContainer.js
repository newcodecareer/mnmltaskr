import { connect } from 'react-redux'
import TaskFilters from '../components/menu/TaskFilters'
import { reduxForm, formValueSelector } from 'redux-form'

const decoratedFilters = reduxForm({
  form: 'filter'
})(TaskFilters)

const selector = formValueSelector('filter')
export default connect(state => {
  const title = selector(state, 'title')

  return { title }
})(decoratedFilters)
