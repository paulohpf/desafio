import { createStore } from 'redux';

const INITIAL_STATE = {
    searchValue: '',
    usersList: {
        totalUsers: '',
        totalInadimplentes: '',
        totalAdimplentes: '',
        totalAmount: '',
        users: [],
        loading: false
    }
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                searchValue: action.searchValue
            };
        /*
        TODO
        Mudar de UPDATE_USERS_LIST para GET_DASHBOARD_DATA
         */
        case 'UPDATE_USERS_LIST':
            return {
                ...state,
                usersList: {
                    totalUsers: action.data.totalUsers,
                    totalInadimplentes: action.data.totalInadimplentes,
                    totalAdimplentes: action.data.totalAdimplentes,
                    totalAmount: action.data.totalAmount,
                    users: action.data.users,
                    loading: action.loading
                }
            }
        case 'UPDATE_USERS_PAGINATED_LIST':
            return {
                ...state,
                usersList: {
                    ...state.usersList,
                    users: action.users,
                    loading: action.loading
                    }
                }
        case 'UPDATE_SEARCH_LIST':
            return {
                ...state,
                usersList: {
                    ...state.usersList,
                    loading: action.loading,
                    dataSearch: action.data
                }
            }
        case 'SET_USERS_LIST_LOADING':
            return {
                ...state,
                usersList: {
                    ...state.usersList,
                    loading: action.loading
                }
            }
        case 'SET_PAGINATION':
            return {
                ...state,
                usersList: {
                    data: { ...state.usersList.data },
                    loading: { ...state.usersList.loading },
                    // pagination: action.pagination
                }
            }


        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;