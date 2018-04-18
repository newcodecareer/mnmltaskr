import wizardReducer from '../../reducers/wizardReducer'

describe('wizard reducer', () => {
  it('should return the initial state', () => {
    expect(wizardReducer(undefined, {})).toEqual({
      page: 1
    })
  })

  it('should handle GO_TO_PREV', () => {
    expect(wizardReducer({ page: 2 }, {
      type: 'GO_TO_PREV'
    })).toEqual({
      page: 1
    })
  })

  it('should handle GO_TO_NEXT', () => {
    expect(wizardReducer({ page: 2 }, {
      type: 'GO_TO_NEXT'
    })).toEqual({
      page: 3
    })
  })
})
