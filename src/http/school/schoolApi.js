import { post, get } from "../Index/Index"

const SCHOOL_BASE_URL = "school/"

const add = (data) => {
    return post(SCHOOL_BASE_URL + 'add', data)
}

const query = (params) => {
    return get(SCHOOL_BASE_URL + 'query', params)
}

const del = (params) => {
    return get(SCHOOL_BASE_URL + 'delete', params)
}

const edit = (data) => {
    return post(SCHOOL_BASE_URL + 'edit', data)
}

const al = () => {
    return get(SCHOOL_BASE_URL + 'all')
}

const one = (params) => {
    return get(SCHOOL_BASE_URL + 'one/' + params.id)
}

const checkName = (params) => {
    return get(SCHOOL_BASE_URL + 'checkSchoolName', params)
}

export {
    al,
    edit,
    del,
    query,
    add,
    one,
    checkName
}