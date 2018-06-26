import { createSelector } from 'reselect'

const getWidgetInfo = (state, props) => {
    const widgetId = props.match.params.id;
    return state.widgets[widgetId];
}
export const getWidgetState = createSelector (
    [ getWidgetInfo ],
    (widget) => widget
)
