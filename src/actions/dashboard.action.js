import { CALL_API } from 'redux-api-middleware';
import { dashboardRef } from '../configs/firebase';

export const DashboardAction = {
  DASHBOARD_CREATION: 'DASHBOARD_CREATION',
  CHANGE_LAYOUT: 'CHANGE_LAYOUT',
  EDIT_DASHBOARD: 'EDIT_DASHBOARD',
  UPDATE_CONFIG: 'UPDATE_CONFIG',
  DELETE_WIDGET: 'DELETE_WIDGET',
  WIDGET_SETTING: 'WIDGET_SETTING',
  UPDATE_COMMON_INFO: 'UPDATE_COMMON_INFO'
};

export const DashboardActionCreator = {
  createDashboard: dashboard => ({
    type: DashboardAction.DASHBOARD_CREATION,
    payload: dashboard
  }),
  changeLayout: type => ({
    type: DashboardAction.CHANGE_LAYOUT,
    payload: type
  }),
  updateConfig: (id, configs) => ({
    type: DashboardAction.UPDATE_CONFIG,
    payload: { id, configs }
  }),
  switchMode: isEdit => ({
    type: DashboardAction.EDIT_DASHBOARD,
    payload: isEdit
  }),
  deleteWidget: id => ({
    type: DashboardAction.DELETE_WIDGET,
    payload: id
  }),
  goToSetting: (id, isEditing = true) => ({
    type: DashboardAction.WIDGET_SETTING,
    payload: { isEditing, id }
  }),
  updateWidgetInfo: payload => ({
    type: DashboardAction.UPDATE_COMMON_INFO,
    payload
  })
};

export const saveDashboard = dashboard => {
  return {
    [CALL_API]: {
      endpoint: `/api/dashboards/${dashboard.id}`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dashboard),
      types: ['REQUEST', 'SUCCESS', 'FAILED']
    }
  };
};

export const fetchDashboard = () => dispatch => {
  // return {
  //   [CALL_API]: {
  //     endpoint: '/api/dashboards/20',
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //     types: ['REQUEST', 'DASHBOARD_CREATION', 'FAILED']
  //   }
  // };
  dashboardRef.on('value', snapshot => {
    dispatch(DashboardActionCreator.createDashboard(snapshot.val()));
  });
};
