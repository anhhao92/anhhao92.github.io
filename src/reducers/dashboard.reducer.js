import { DashboardAction } from '../actions/dashboard.action';
export const dashboard = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case DashboardAction.DASHBOARD_CREATION:
      return {
        ...state
      };
    case DashboardAction.CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: payload
      };
    case DashboardAction.UPDATE_CONFIG:
      const widgets = {
        ...state.widgets,
        [payload.id]: {
          ...state.widgets[payload.id],
          configs: { ...payload.configs }
        }
      };
      return {
        ...state,
        widgets: widgets
      };
    case DashboardAction.DASHBOARD_SWITCH_MODE:
      return {
        ...state,
        isEdit: payload
      };
    case DashboardAction.DELETE_WIDGET:
      delete state.widgets[payload];
      return { ...state };
    case DashboardAction.SWITCH_WIDGET_TO_SETTING:
      return {
        ...state,
        widgets: {
          ...state.widgets,
          [payload.id]: {
            ...state.widgets[payload.id],
            isEditing: payload.isEditing
          }
        }
      };
    default:
      return state;
  }
};
