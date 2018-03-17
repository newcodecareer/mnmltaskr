export default function selectItem (itemName) {
  return function (dispatch) {
    dispatch({ 
      type: "SELECT_ITEM", 
      payload: itemName
    })
  }
}