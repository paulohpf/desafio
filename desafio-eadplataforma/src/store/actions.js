export function set_profile (data) {
    return {
        type: 'SET_PROFILE',
        profile: {
            id: data.id,
            name: data.name,
            email: data.email,
            photo_url: data.photo_url
        }
    }
}

export function get_dashboard_data(data) {
    return {
        type: 'GET_DASHBOARD_DATA',
        loading: false,
        data: data
    }
}

export function update_users_paginated_list(data) {
    return {
        type: 'UPDATE_USERS_PAGINATED_LIST',
        loading: false,
        users: data.users,
        pagination: {
            current: data.currentPage
        }
    }
}

export function update_search_list(data) {
    return {
        type: 'UPDATE_SEARCH_LIST',
        loading: false,
        search: data.search
    }
}

export function set_users_list_loading(loading = true) {
    return {
        type: 'SET_USERS_LIST_LOADING',
        loading
    }
}

export function set_pagination(pagination) {
    console.log(pagination);
    return {
        type: 'SET_PAGINATION',
        pagination
    }
}

export function set_search(searchValue) {
    return {
        type: 'SET_SEARCH',
        searchValue
    }
}