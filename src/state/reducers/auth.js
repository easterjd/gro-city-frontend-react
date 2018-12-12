import { authActions } from '../actions/boards'

const {
    USER_LOGIN_PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_PENDING,
    USER_LOGOUT_SUCCESS,
    USER_REGISTER_PENDING,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} = authActions

let INITIAL_STATE = {
    isLoading: false,
	isLoggedIn: false,
	showLoginError: false,
	showRegisterError: false,
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_PENDING:
            return { ...state, isLoading: true }
        case USER_LOGIN_SUCCESS:
            return { ...state, isLoading: false, showLoginError: false}
        case USER_LOGIN_FAIL:
            return { ...state, isLoading: false, showLoginError: true }
        case USER_LOGOUT_PENDING:
            return { ...state, isLoading: true }
        case USER_LOGOUT_SUCCESS:
            return { ...state, isLoading: false }
        case USER_REGISTER_PENDING:
            return { ...state, isLoading: true }
        case USER_REGISTER_SUCCESS:
            return { ...state, isLoading: false, showRegisterError: false }
        case USER_REGISTER_FAIL:
            return { ...state, isLoading: false, showRegisterError: true }
    }
}