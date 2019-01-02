import {
    BOARDS_PENDING,
    BOARDS_SUCCESS,
    BOARDS_FAIL,
    VIEW_BOARD_PENDING,
    VIEW_BOARD_SUCCESS,
    VIEW_BOARD_FAIL,
    CREATE_BOARD_PENDING,
    CREATE_BOARD_SUCCESS,
    CREATE_BOARD_FAIL,
    EDIT_BOARD_PENDING,
    EDIT_BOARD_SUCCESS,
    EDIT_BOARD_FAIL,
    DELETE_BOARD_PENDING,
    DELETE_BOARD_SUCCESS,
    DELETE_BOARD_FAIL,
    ADD_PLANT_PENDING,
    ADD_PLANT_SUCCESS,
    ADD_PLANT_FAIL,
    REMOVE_PLANT_PENDING,
    REMOVE_PLANT_SUCCESS,
    REMOVE_PLANT_FAIL
} from '../actions/boards'

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
            return { ...state, isLoading: false, boards: action.payload, error: null}
        case BOARDS_FAIL:
            return { ...state, isLoading: false, error: action.payload }
        case VIEW_BOARD_PENDING:
            return { ...state, isLoading: true }
        case VIEW_BOARD_SUCCESS:
            return { ...state, isLoading: false, currentBoard: action.payload, error: null }
        case VIEW_BOARD_FAIL:
            return { ...state, isLoading: false, error: action.payload}
        case CREATE_BOARD_PENDING:
            return { ...state, isLoading: true }
        case CREATE_BOARD_SUCCESS:
            return { ...state, isLoading: false, error: null }
        case CREATE_BOARD_FAIL:
            return { ...state, isLoading: false, error: action.payload}
        case EDIT_BOARD_PENDING:
            return { ...state, isLoading: true }
        case EDIT_BOARD_SUCCESS:
            return { ...state, isLoading: false, error: null }
        case EDIT_BOARD_FAIL:
            return { ...state, isLoading: false, error: action.payload }
        case DELETE_BOARD_PENDING:
            return { ...state, isLoading: true }
        case DELETE_BOARD_SUCCESS:
            return { ...state, isLoading: false, error: null }
        case DELETE_BOARD_FAIL:
            return { ...state, isLoading: false, error: action.payload }
        case ADD_PLANT_PENDING:
            return { ...state, isLoading: true }
        case ADD_PLANT_SUCCESS:
            return { ...state, isLoading: false, error: null }
        case ADD_PLANT_FAIL:
            return { ...state, isLoading: false, error: action.payload }
        case REMOVE_PLANT_PENDING:
            return { ...state, isLoading: true }
        case REMOVE_PLANT_SUCCESS:
            return { ...state, isLoading: false, error: null }
        case REMOVE_PLANT_FAIL:
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state
    }
}