import { request } from '../../helpers/request'

export const getPage = (page, searchState) => {
    return request(`/plants/${page}`, 'post', searchState)
}