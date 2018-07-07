import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { DashboardActionCreator } from '../../actions/dashboard.action';

class OrgChartSetting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rootEmployeeId: this.props.configs.rootEmployeeId || 2
    };
  }

  setRootEmployee = e => {
    this.setState({
      rootEmployeeId: parseInt(e.target.value, 10)
    });
  };

  componentWillUnmount() {
    const { dispatch, widgetId } = this.props;
    dispatch(DashboardActionCreator.updateConfig(widgetId, this.state));
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className="row">
        <div className="col-12">Root Contact:</div>
        <div className="col-6">
          <Input
            type="select"
            defaultValue={this.state.rootEmployeeId}
            onChange={this.setRootEmployee}
          >
            {contacts &&
              contacts.map(e => (
                <option key={e.id} value={e.id}>
                  {e.firstName} {e.lastName}
                </option>
              ))}
          </Input>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.dataSource.contacts
});
export default connect(mapStateToProps)(OrgChartSetting);
