const goToPrev = () => {
  return (dispatch) => {
    dispatch({
      type: 'GO_TO_PREV'
    })
  }
}

const goToNext = () => {
  return (dispatch) => {
    dispatch({
      type: 'GO_TO_NEXT'
    })
  }
}

export {
  goToPrev,
  goToNext
}
