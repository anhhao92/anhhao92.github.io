import React from 'react';
import { FaCog, FaArrowsAlt, FaClose } from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import {
  getConfigButtonState,
  getMaximizeButtonState,
  getRemoveButtonState
} from '../../selectors/baseWidget.selectors';
import './base.css';

class BaseWidget extends React.PureComponent {
  onClickSetting = () => {
    const { dispatch, widgetId, widgetType } = this.props;
    if (!widgetType) {
      return;
    }
    dispatch(DashboardActionCreator.goToSetting(widgetId));
  };

  onDelete = () => {
    const { dispatch, widgetId } = this.props;
    dispatch(DashboardActionCreator.deleteWidget(widgetId));
  };

  // saveAndClose = () => {
  //   const { dispatch, widgetId } = this.props;
  //   dispatch(DashboardActionCreator.goToSetting(widgetId, false));
  // };

  render() {
    const {
      widgetId,
      title,
      isSetting,
      isDeleted,
      isMaximized,
      children
    } = this.props;
    return (
      <div className="col-4">
        <div className="widget">
          <div className="widget-header">
            <div className="widget-header__text">{title}</div>
            <div className="widget-header__icon-group">
              {isSetting && <FaCog onClick={this.onClickSetting} />}
              {isMaximized && (
                <Link to={`/view/${widgetId}`}>
                  <FaArrowsAlt />
                </Link>
              )}
              {isDeleted && <FaClose onClick={this.onDelete} />}
            </div>
          </div>
          <div className="widget-content">{children}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isSetting: getConfigButtonState(props),
  isMaximized: getMaximizeButtonState(props),
  isDeleted: getRemoveButtonState(props)
});

export default connect(mapStateToProps)(BaseWidget);
