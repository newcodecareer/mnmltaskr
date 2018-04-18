import menuReducer from '../../reducers/menuReducer'

describe('menu reducer', () => {
  it('should return the initial state', () => {
    expect(menuReducer(undefined, {})).toEqual({
      visible: false
    })
  })

  it('should handle SELECT_ITEM', () => {
    expect(menuReducer({}, {
      type: 'SELECT_ITEM',
      payload: 'post-a-task'
    })).toEqual({
      activeItem: 'post-a-task'
    })
  })

  it('should handle TOGGLE_SIDEBAR', () => {
    expect(menuReducer({}, {
      type: 'TOGGLE_SIDEBAR',
      payload: true
    })).toEqual({
      visible: true
    })
  })
})
