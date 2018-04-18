import userReducer from '../../reducers/userReducer'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      isActive: false
    })
  })

  it('should handle USER_STATUS', () => {
    expect(userReducer({}, {
      type: 'USER_STATUS',
      payload: true
    })).toEqual({
      isActive: true
    })
  })
})
