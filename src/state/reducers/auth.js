import authActions from '../actions/auth'

const {
    USER_LOGIN_PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    NOT_LOGGED_IN,
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
    loginError: null,
    showRegisterError: false,
    regError: null
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_PENDING:
            return { ...state, isLoading: true }
        case USER_LOGIN_SUCCESS:
            return { ...state, isLoading: false, isLoggedIn: true, showLoginError: false}
        case USER_LOGIN_FAIL:
            return { ...state, isLoading: false, showLoginError: true, loginError: action.payload }
        case NOT_LOGGED_IN:
            return { ...state, isLoading: false, isLoggedIn: false, loginError: action.payload}
        case USER_LOGOUT_PENDING:
            return { ...state, isLoading: true }
        case USER_LOGOUT_SUCCESS:
            return { ...state, isLoading: false, isLoggedIn: false }
        case USER_REGISTER_PENDING:
            return { ...state, isLoading: true }
        case USER_REGISTER_SUCCESS:
            return { ...state, isLoading: false, isLoggedIn: true, showRegisterError: false }
        case USER_REGISTER_FAIL:
            return { ...state, isLoading: false, isLoggedIn: false, showRegisterError: true, regError: action.payload }
    }
}