import React from 'react';
import { connect } from 'react-redux'
import { getWidgetInfo } from '../../selectors/viewSelector'
import { SYSTEM_COMPONENTS } from '../../constants';

const ViewWidget = ({widget}) => {
    const WidgetComponent = SYSTEM_COMPONENTS[widget.widgetType];
    return (
        <div className="container-fluid">
            <div className="row">
                <WidgetComponent {...widget} isScale/>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    widget: getWidgetInfo(state.dashboard, props)
})

export default connect(mapStateToProps)(ViewWidget)