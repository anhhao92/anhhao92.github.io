import React from 'react';
import { connect } from 'react-redux';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import { FaPlus } from 'react-icons/lib/fa';
import './placeHolder.css';

class PlaceHolderWidget extends React.PureComponent {
  onClick = () => {
    const { dispatch, widgetId } = this.props;
    dispatch(DashboardActionCreator.goToSetting(widgetId));
  };

  render() {
    return (
      <div onClick={this.onClick} className="add-content">
        <FaPlus size={100} />{' '}
      </div>
    );
  }
}

export default connect()(PlaceHolderWidget);
