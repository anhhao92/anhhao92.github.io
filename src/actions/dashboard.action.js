export const DashboardAction = {
    'DASHBOARD_CREATION': 'DASHBOARD_CREATION',
    'CHANGE_LAYOUT': 'CHANGE_LAYOUT',
    'DASHBOARD_SWITCH_MODE': 'DASHBOARD_SWITCH_MODE',
    'DASHBOARD_UPDATE_CONFIG': 'DASHBOARD_UPDATE_CONFIG',
    'DELETE_WIDGET': 'DELETE_WIDGET',
    'SWITCH_WIDGET_TO_SETTING': 'SWITCH_WIDGET_TO_SETTING'
}

export const DashboardActionCreator = {
    createDashboard: (dashboard) => ({
        type: DashboardAction.DASHBOARD_CREATION,
        payload: dashboard
    }),
    changeLayout: (type) => ({
        type: DashboardAction.CHANGE_LAYOUT,
        payload: type    
    }),
    updateWidgetConfiguration: (widgetId, configs) => ({
        type: DashboardAction.UPDATE_WIDGET_CONFIG,
        payload: { widgetId, configs }
    }),
    switchMode: (isEdit) => ({
        type: DashboardAction.DASHBOARD_SWITCH_MODE,
        payload: isEdit    
    }),
    deleteWidget: (id) => ({
        type: DashboardAction.DELETE_WIDGET,
        payload: id    
    }),
    switchWidgetToSettingMode: (id, isEditing = true) => ({
        type: DashboardAction.SWITCH_WIDGET_TO_SETTING,
        payload: {isEditing, id}
    }),
}