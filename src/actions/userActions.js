export default function setStatus () {
  const user = localStorage.getItem('user')

  return function (dispatch) {
    dispatch({
      type: 'USER_STATUS',
      payload: !!user
    })
  }
}
