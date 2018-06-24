import { DashboardAction } from '../actions/dashboard.action'
export const dashboard = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case DashboardAction.DASHBOARD_CREATION:
            return  {
                ...state
            }
        case DashboardAction.CHANGE_LAYOUT:
            return  {
                ...state,
                layoutType: payload
            }
        case DashboardAction.DASHBOARD_UPDATE_CONFIG:
            return {
                ...state,
                // widgets: state.map(widget => widget.widgetId === payload.widgetId 
                //     ? {...widget, ...payload.configs} 
                //     : widget
                // )
            }
        case DashboardAction.DASHBOARD_SWITCH_MODE:
            return {
                ...state,
                isEdit: payload
            }
        case DashboardAction.DELETE_WIDGET:
            let result = {}
            Object.keys(state.widgets).forEach(id => {
                if(id !== payload){
                    result[id] = state.widgets[id]
                }
            });
            return {
                ...state,
                widgets: result
            }
        default:
            return state
    }
}