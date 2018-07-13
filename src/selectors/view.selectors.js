import { createSelector } from 'reselect';

const getWidgetInfo = (state, props) => {
  const widgetId = parseInt(props.match.params.id, 10);
  const widgets = state.widgets;
  return widgets && widgets.find(m => m.widgetId === widgetId);
};
export const getWidgetState = createSelector([getWidgetInfo], widget => widget);
