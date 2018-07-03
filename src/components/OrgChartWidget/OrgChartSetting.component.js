import React from 'react';
import BaseSetting from '../WidgetSetting/BaseSetting.component';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';

import { DashboardActionCreator } from '../../actions/dashboard.action';

class OrgChartSetting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //   chartType: props.configs.chartType,
      //   dataSource: props.configs.dataSource,
      //   groupBy: props.configs.groupBy
    };
  }

  componentWillUnmount() {
    const { dispatch, widgetId } = this.props;
    // dispatch(DashboardActionCreator.updateConfig(widgetId, this.state));
  }

  render() {
    return (
      <BaseSetting {...this.props}>
        <div className="col-12">Root Contact:</div>
        <div className="col-6">
          <Input type="select" name="select">
            <option value="1">Hung Nguyen</option>
            <option value="2">Tham Ly</option>
          </Input>
        </div>
      </BaseSetting>
    );
  }
}
export default connect()(OrgChartSetting);
