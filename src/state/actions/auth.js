import authModel from './models/auth'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN'
export const USER_LOGOUT_PENDING = 'USER_LOGOUT_PENDING'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export const USER_REGISTER_PENDING = 'USER_REGISTER_PENDING'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

export const checkLoggedIn = () => {
    return async (dispatch) => {
		try {
			dispatch({ type: USER_LOGIN_PENDING });
			const response = await authModel.authenticatedRequest();
			dispatch({ type: USER_LOGIN_SUCCESS });
		}
		catch (err) {
			dispatch({ type: NOT_LOGGED_IN, payload: err });
		}
	};
}

export const login = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: USER_LOGIN_PENDING });
            const response = await authModel.login(body)
            dispatch({ type: USER_LOGIN_SUCCESS })
        } catch (err) {
            dispatch({ type: USER_LOGIN_FAIL, payload: err })
        }
    }
}

export const register = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: USER_REGISTER_PENDING })
            const response = await authModel.register(body)
            dispatch({ type: USER_REGISTER_SUCCESS })
        } catch (err) {
            dispatch({ type: USER_REGISTER_FAIL, payload: err})
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: USER_LOGOUT_PENDING })
        authModel.logout()
        dispatch({ type: USER_LOGOUT_SUCCESS })
    }
}