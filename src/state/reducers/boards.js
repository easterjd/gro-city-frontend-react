import { boardActions } from '../actions/boards'

const {
    BOARDS_PENDING,
    BOARDS_SUCCESS,
    BOARDS_FAIL,
    VIEW_BOARD_PENDING,
    VIEW_BOARD_SUCCESS,
    VIEW_BOARD_FAIL
} = boardActions

let INITIAL_STATE = {
    isLoading: false,
    boards: [],
    currentBoard: null,
    error: null
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case BOARDS_PENDING:
            return { ...state, isLoading: true}
        case BOARDS_SUCCESS:
            return { ...state, isLoading: false, boards: action.payload}
        case BOARDS_FAIL:
            return { ...state, isLoading: false, error: action.payload }
        case VIEW_BOARD_PENDING:
            return { ...state, isLoading: true }
        case VIEW_BOARD_SUCCESS:
            return { ...state, isLoading: false, currentBoard: action.payload }
        case VIEW_BOARD_FAIL:
            return { ...state, isLoading: false, error: action.payload}
    }
}