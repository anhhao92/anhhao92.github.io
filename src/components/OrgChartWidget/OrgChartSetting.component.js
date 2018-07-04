import React from 'react';
import { connect } from 'react-redux';
import { OrgChartSettingView } from './OrgChartSetting.view';
import { DashboardActionCreator } from '../../actions/dashboard.action';

class OrgChartSetting extends React.PureComponent {
  setRootEmployee = e => {
    const { configs, dispatch, widgetId } = this.props;
    configs.rootEmployeeId = parseInt(e.target.value, 10);
    dispatch(DashboardActionCreator.updateConfig(widgetId, configs));
  };

  render() {
    return (
      <OrgChartSettingView
        {...this.props}
        setRootEmployee={this.setRootEmployee}
      />
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.dataSource.contacts
});
export default connect(mapStateToProps)(OrgChartSetting);
