import { plantActions } from '../actions/plants'

const {
    PLANT_PAGE_PENDING,
    PLANT_PAGE_SUCCESS,
    PLANT_PAGE_FAIL
} = plantActions

let INITIAL_STATE = {
    isLoading: false,
    page: {},
    error: null
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case PLANT_PAGE_PENDING:
            return { ...state, isLoading: true}
        case PLANT_PAGE_SUCCESS:
            return { ...state, isLoading: false, page: action.payload}
        case PLANT_PAGE_FAIL:
            return { ...state, isLoading: false, error: action.payload}
    }
}