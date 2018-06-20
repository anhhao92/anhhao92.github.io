import {DashboardAction} from '../actions/dashboard.action'
export const dashboard = (state = {}, action) => {
    const {type} = action;
    switch (type) {
        case DashboardAction.DASHBOARD_CREATION:
            return  {
                ...state,
            }
        default:
            return state
    }
}