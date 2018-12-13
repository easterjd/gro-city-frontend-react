import plantsModel from '../models/plants'
import plants from '../reducers/plants';

export const PLANT_PAGE_PENDING = 'PLANT_PAGE_PENDING'
export const PLANT_PAGE_SUCCESS = 'PLANT_PAGE_SUCCESS'
export const PLANT_PAGE_FAIL = 'PLANT_PAGE_FAIL'
export const PAGE_SELECT = 'PAGE_SELECT'
export const PAGE_RESET = 'PAGE_RESET'
export const SEARCH_CHANGE = 'SEARCH_CHANGE'
export const SEARCH_RESET = 'SEARCH_RESET'

export const getPlantsPage = (page, body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PLANT_PAGE_PENDING })
            const response = await plantsModel.getPage(page, body)
            dispatch({ type: PLANT_PAGE_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({ type: PLANT_PAGE_FAIL, payload: e })
        }
    }
}

export const pageSelect = (page) => {
    return async (dispatch) => {
        dispatch({ type: PAGE_SELECT, payload: page })
    }
}

export const pageReset = () => {
    return async (dispatch) => {
        dispatch({ type: PAGE_RESET })
    }
}

export const searchChange = (searchState) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_CHANGE, payload: searchState })
    }
}

export const searchReset = () => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_RESET })
    }
}