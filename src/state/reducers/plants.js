import plantActions from '../actions/plants'

const {
    PLANT_PAGE_PENDING,
    PLANT_PAGE_SUCCESS,
    PLANT_PAGE_FAIL,
    PAGE_SELECT,
    PAGE_RESET,
    SEARCH_CHANGE,
    SEARCH_RESET
} = plantActions

let baseSearch = {
    scientific_name: "",
    data: {
        bloomPeriod: "",
        category: "",
        coarseSoil: "",
        duration: "",
        fineSoil: "",
        flowerColor: "",
        flowerConsp: "",
        growPeriod: "",
        habit: "",
        invasive: "",
        medSoil: "",
        moisture: "",
        shade: "",
        tempMin: "",
    }
}

let INITIAL_STATE = {
    isLoading: false,
    page: 1,
    searchState: baseSearch,
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
        case PAGE_SELECT:
            return { ...state, page: action.payload }
        case PAGE_RESET:
            return { ...state, page: 1 }
        case SEARCH_CHANGE:
            return { ...state, searchState: action.payload }
        case SEARCH_RESET:
            return { ...state, searchState: baseSearch }
    }
}