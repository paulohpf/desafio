import { createStore } from 'redux';

const INITIAL_STATE = {
    searchValue: '',
    usersList: {
        loading: false,
        pagination: {
            current: 1
        },
        data: {}
    }
}

function reducer(state = INITIAL_STATE, action) {
    console.log(action.type);

    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                searchValue: action.searchValue
            };
        case 'UPDATE_USERS_LIST':
            return {
                ...state,
                usersList: {
                    pagination: action.pagination,
                    data: action.data,
                    loading: action.loading
                }
            }
        case 'SET_USERS_LIST_LOADING':
            return {
                ...state,
                usersList: {
                    pagination: {...state.usersList.pagination},
                    data: {...state.usersList.data},
                    loading: action.loading
                }
            }
        case 'SET_PAGINATION':
            return {
                ...state,
                usersList: {
                    data: {...state.usersList.data},
                    loading: {...state.usersList.loading},
                    pagination: action.pagination
                }
            }
            

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;