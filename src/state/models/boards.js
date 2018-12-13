import { request } from '../../helpers/request'

export const getBoards = () => {
    return request('/boards')
}

export const getPlants = (id) => {
    return request(`/boards/${id}`)
}

export const create = (body) => {
    return request(`/boards`, 'post', body)
}

export const edit = (id, body) => {
    return request(`/boards/${id}`, 'patch', body)
}

export const deleteBoard = (id) => {
    return request(`/boards/${id}`, 'delete')
}

export const addPlant = (boardId, plantId) => {
    return request(`/boards/${boardId}/plants/${plantId}`, 'post')
}

export const deletePlant = (boardId, plantId) => {
    return request(`/boards/${boardId}/plants/${plantId}`, 'delete')
}