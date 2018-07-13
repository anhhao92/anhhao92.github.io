import React from 'react';
import { connect } from 'react-redux';
import { getWidgetState } from '../../selectors/view.selectors';
import { SYSTEM_COMPONENTS } from '../../constants';
import { fetchDashboard } from '../../actions/dashboard.action';

class ViewComponent extends React.PureComponent {
  componentWillMount() {
    const { dispatch, dashboard } = this.props;
    if (!dashboard.id) {
      dispatch(fetchDashboard());
    }
  }

  render() {
    const { widget } = this.props;
    const WidgetComponent = widget && SYSTEM_COMPONENTS[widget.widgetType];
    return (
      <div className="container-fluid">
        <div className="row">
          {widget ? (
            <WidgetComponent {...widget} isScale />
          ) : (
            <div className="lds-hourglass" />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  widget: getWidgetState(state.dashboard, props),
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(ViewComponent);
