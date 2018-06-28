import React from 'react';
import { connect } from 'react-redux'
import { getWidgetState } from '../../selectors/view.selectors'
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
    widget: getWidgetState(state.dashboard, props)
})

export default connect(mapStateToProps)(ViewWidget)