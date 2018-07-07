import { createSelector } from 'reselect';

const getWidgetInfo = (state, props) => {
  const widgetId = parseInt(props.match.params.id, 10);
  return state.widgets.find(m => m.widgetId === widgetId);
};
export const getWidgetState = createSelector([getWidgetInfo], widget => widget);
