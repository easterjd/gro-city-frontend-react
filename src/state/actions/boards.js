import boardsModel from '../models/boards'

export const BOARDS_PENDING = 'BOARDS_PENDING'
export const BOARDS_SUCCESS = 'BOARDS_SUCCESS'
export const BOARDS_FAIL = 'BOARDS_FAIL'
export const VIEW_BOARD_PENDING = 'VIEW_BOARD_PENDING'
export const VIEW_BOARD_SUCCESS = 'VIEW_BOARD_SUCCESS'
export const VIEW_BOARD_FAIL = 'VIEW_BOARD_FAIL'
export const CREATE_BOARD_PENDING = 'CREATE_BOARD_PENDING'
export const CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS'
export const CREATE_BOARD_FAIL = 'CREATE_BOARD_FAIL'
export const EDIT_BOARD_PENDING = 'EDIT_BOARD_PENDING'
export const EDIT_BOARD_SUCCESS = 'EDIT_BOARD_SUCCESS'
export const EDIT_BOARD_FAIL = 'EDIT_BOARD_FAIL'
export const DELETE_BOARD_PENDING = 'DELETE_BOARD_PENDING'
export const DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS'
export const DELETE_BOARD_FAIL = 'DELETE_BOARD_FAIL'
export const ADD_PLANT_PENDING = 'ADD_PLANT_PENDING'
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS'
export const ADD_PLANT_FAIL = 'ADD_PLANT_FAIL'
export const REMOVE_PLANT_PENDING = 'REMOVE_PLANT_PENDING'
export const REMOVE_PLANT_SUCCESS = 'REMOVE_PLANT_SUCCESS'
export const REMOVE_PLANT_FAIL = 'REMOVE_PLANT_FAIL'

export const getBoards = async () => {
    return async (dispatch) => {
        try {
            dispatch({ type: BOARDS_PENDING })
            const response = await boardsModel.getBoards()
            dispatch({ type: BOARDS_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({ type: BOARDS_FAIL, payload: e })
        }
    }
}

export const getPlants = async (boardId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: VIEW_BOARD_PENDING })
            const response = await boardsModel.getPlants(boardId)
            dispatch({ type: VIEW_BOARD_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({ type: VIEW_BOARD_FAIL, payload: e })
        }
    }
}

export const createBoard = async (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CREATE_BOARD_PENDING })
            await boardsModel.create(body)
            dispatch({ type: CREATE_BOARD_SUCCESS })
        } catch (e) {
            dispatch({ type: CREATE_BOARD_FAIL, payload: e })
        }
    }
}

export const editBoard = async (boardId, body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: EDIT_BOARD_PENDING })
            await boardsModel.edit(boardId, body)
            dispatch({ type: EDIT_BOARD_SUCCESS })
        } catch (e) {
            dispatch({ type: EDIT_BOARD_FAIL, payload: e })
        }
    }
}

export const deleteBoard = async (boardId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: DELETE_BOARD_PENDING })
            await boardsModel.deleteBoard(boardId)
            dispatch({ type: DELETE_BOARD_SUCCESS })
        } catch (e) {
            dispatch({ type: DELETE_BOARD_FAIL, payload: e })
        }
    }
}

export const addPlant = async (boardId, plantId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ADD_PLANT_PENDING })
            await boardsModel.addPlant(boardId, plantId)
            dispatch({ type: ADD_PLANT_SUCCESS })
        } catch (e) {
            dispatch({ type: ADD_PLANT_FAIL, payload: e })
        }
    }
}

export const deletePlant = async (boardId, plantId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: REMOVE_PLANT_PENDING })
            await boardsModel.deletePlant(boardId, plantId)
            dispatch({ type: REMOVE_PLANT_SUCCESS })
        } catch (e) {
            dispatch({ type: REMOVE_PLANT_FAIL, payload: e })
        }
    }
}