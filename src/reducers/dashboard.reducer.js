import { DashboardAction } from '../actions/dashboard.action';
import { LAYOUT_TYPES, COMPONENTS } from '../constants';

export const dashboard = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case DashboardAction.DASHBOARD_CREATION:
      return {
        ...state,
        ...payload
      };
    case DashboardAction.CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: payload,
        widgets: recalculateSampleWidget(state.widgets, payload)
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
        ? createSampleWidget(state.widgets, state.layoutType)
        : removeSampleWidget(state.widgets);
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
      const newWidgets = state.widgets.filter(m => m.widgetId !== payload);
      return {
        ...state,
        widgets: recalculateSampleWidget(newWidgets, state.layoutType)
      };
    case DashboardAction.WIDGET_SETTING:
      const currentWidgets = state.widgets.map(m => {
        if (m.widgetId === payload.id) {
          m.isEditing = payload.isEditing;
        }
        return m;
      });
      return {
        ...state,
        widgets: shouldInsertMoreSampleWidget(currentWidgets, state.layoutType)
      };
    case DashboardAction.UPDATE_COMMON_INFO:
      return {
        ...state,
        widgets: state.widgets.map(
          widget =>
            widget.widgetId === payload.widgetId
              ? { ...widget, ...payload }
              : widget
        )
      };
    default:
      return state;
  }
};

const getNumberOfSampleWidgets = (total, type) => {
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

const createSampleWidget = (widgets, layoutType) => {
  const result = [];
  const total = getNumberOfSampleWidgets(widgets.length, layoutType);
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
  return widgets.concat(result);
};

const removeSampleWidget = widgets => {
  return widgets.filter(
    m => m.widgetType !== COMPONENTS.DEFAULT_WIDGET || m.isEditing
  );
};

const recalculateSampleWidget = (widgets, layoutType) => {
  widgets = widgets.filter(
    m => m.widgetType !== COMPONENTS.DEFAULT_WIDGET || m.isEditing
  );
  return createSampleWidget(widgets, layoutType);
};

const shouldInsertMoreSampleWidget = (widgets, layoutType) => {
  const remainingSampleWdgets = widgets.filter(
    m => m.widgetType === COMPONENTS.DEFAULT_WIDGET && !m.isEditing
  );
  if (remainingSampleWdgets.length === 0) {
    return createSampleWidget(widgets, layoutType);
  }
  return widgets;
};
