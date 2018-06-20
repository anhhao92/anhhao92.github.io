export const dataSource = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SOURCE':
            return  {
                ...state,
                ...action.data 
            }
        default:
            return state
    }
}