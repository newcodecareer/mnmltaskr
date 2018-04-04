const setStatus = () => {
  const user = localStorage.getItem('user')

  return (dispatch) => {
    dispatch({
      type: 'USER_STATUS',
      payload: !!user
    })
  }
}

export default setStatus
