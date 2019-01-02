import { request } from '../../helpers/request'

export const authenticatedRequest = async () => {
    return request('/users/verify')
}

export const login = async (body) => {
    return request('/users/login', 'post', body)
}

export const register = (body) => {
    return request('/users/register', 'post', body)
}

export const logout = () => {
    
}