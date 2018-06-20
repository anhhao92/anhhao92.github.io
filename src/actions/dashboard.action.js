export const DashboardAction = {
    'DASHBOARD_CREATION': 'DASHBOARD_CREATION'
}

export const DashboardActionCreator = {
    createDashboard: (dashboard) => {
        return {
            type: DashboardAction.DASHBOARD_CREATION,
            data: dashboard
        }
    }
}