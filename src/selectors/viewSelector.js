export const getWidgetInfo = (state, props) => {
    const widgetId = props.match.params.id;
    return state.widgets[widgetId];
}