export function goToPrev () {
  return function (dispatch) {
    dispatch({
      type: 'GO_TO_PREV'
    })
  }
}

export function goToNext () {
  return function (dispatch) {
    dispatch({
      type: 'GO_TO_NEXT'
    })
  }
}
