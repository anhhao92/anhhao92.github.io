import { DashboardAction } from '../actions/dashboard.action';
import { LAYOUT_TYPES, COMPONENTS } from '../constants';

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
      return {
        ...state,
        widgets: state.widgets.map(
          widget =>
            widget.widgetId === payload.id
              ? {
                  ...widget,
                  configs: payload.configs
                }
              : widget
        )
      };
    case DashboardAction.EDIT_DASHBOARD:
      let widgets = payload
        ? createSampleWidget(state)
        : removeSampleWidget(state);
      if (!payload) {
        widgets = widgets.map(m => {
          return {
            ...m,
            isEditing: false
          };
        });
      }
      return {
        ...state,
        isEdit: payload,
        widgets: widgets
      };
    case DashboardAction.DELETE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(m => m.widgetId !== payload)
      };
    case DashboardAction.SWITCH_WIDGET_TO_SETTING:
      return {
        ...state,
        widgets: state.widgets.map(m => {
          if (m.widgetId === payload.id) {
            m.isEditing = payload.isEditing;
          }
          return m;
        })
      };
    case DashboardAction.UPDATE_COMMON_INFO:
      return {
        ...state,
        widgets: updateWidgetSetting(state.widgets, payload)
      };
    default:
      return state;
  }
};

const updateWidgetSetting = (widgets, payload) => {
  console.log('Unmount goi', payload);
  return payload.widgetType === COMPONENTS.DEFAULT_WIDGET
    ? widgets.filter(m => m.widgetType !== COMPONENTS.DEFAULT_WIDGET)
    : widgets.map(
        widget =>
          widget.widgetId === payload.widgetId
            ? { ...widget, ...payload }
            : widget
      );
};

const getNumberOfPlaceHolder = (total, type) => {
  switch (type) {
    case LAYOUT_TYPES.A_COLUMN:
      return 1;
    case LAYOUT_TYPES.ABA_COLUMN:
    case LAYOUT_TYPES.AAA_COLUMN:
      if (total % 3 === 0) return 3;
      else if (total % 3 === 1) return 2;
      return 1;
    case LAYOUT_TYPES.AA_COLUMN:
    case LAYOUT_TYPES.AB_COLUMN:
    case LAYOUT_TYPES.BA_COLUMN:
      return total % 2 === 0 ? 2 : 1;
    default:
      return 1;
  }
};
const createSampleWidget = dashboard => {
  const result = [];
  const total = getNumberOfPlaceHolder(
    dashboard.widgets.length,
    dashboard.layoutType
  );
  for (let i = 0; i < total; i++) {
    result.push({
      configs: {},
      maxHeight: 200,
      maxWidth: 400,
      title: 'Add Widget',
      widgetId: +new Date() + i,
      widgetType: COMPONENTS.DEFAULT_WIDGET
    });
  }
  return dashboard.widgets.concat(result);
};

const removeSampleWidget = dashboard => {
  return dashboard.widgets.filter(
    m => m.widgetType !== COMPONENTS.DEFAULT_WIDGET || m.isEditing
  );
};
