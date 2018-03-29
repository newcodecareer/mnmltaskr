export default function wizardReducer (state = { page: 1 }, action) {
  switch (action.type) {
    case 'GO_TO_PREV': {
      return {
        page: state.page - 1
      }
    }
    case 'GO_TO_NEXT': {
      return {
        page: state.page + 1
      }
    }
  }
  return state
}
