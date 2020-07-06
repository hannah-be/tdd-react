import * as types from './types';

const reducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_BOOKS_PENDING:
            return { ...state, loading: true }
        default:
            return state
    }
}

export default reducer;