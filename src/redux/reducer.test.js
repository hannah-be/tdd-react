import reducer from './reducer'
import * as types from './types'

describe('Reducer', () => {
  it('Show loading when request is sent', () => {
    const initState = { loading: false }

    const action = {type: types.FETCH_BOOKS_PENDING}
    const state = reducer(initState, action)

    expect(state.loading).toBeTruthy()
  })
})