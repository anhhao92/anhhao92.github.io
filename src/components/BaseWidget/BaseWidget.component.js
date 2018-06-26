import React from 'react';
import { FaCog, FaArrowsAlt, FaClose } from 'react-icons/lib/fa';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DashboardActionCreator } from '../../actions/dashboard.action';
import './base.css';

class BaseWidget extends React.PureComponent {
    onClickSetting = () => {
        const {dispatch, widgetId} = this.props;
        dispatch(DashboardActionCreator.switchWidgetToSettingMode(widgetId));
    }

    onDelete = () => {
        const {dispatch, widgetId} = this.props;
        dispatch(DashboardActionCreator.deleteWidget(widgetId));
    }

    saveAndClose = () => {
        const {dispatch, widgetId} = this.props;
        dispatch(DashboardActionCreator.switchWidgetToSettingMode(widgetId, false));
    }

    render() {
        const {widgetId, title, isEditDashboard, isEditing, children} = this.props;
        return (
        <div className="col-4">
            <div className='widget'>
                <div className='widget-header'>
                    <div className='widget-header__text'>{title}</div>
                    <div className='widget-header__icon-group'>
                        {!isEditing && isEditDashboard && <FaCog onClick={this.onClickSetting} />}
                        {!isEditing && <Link to={`/view/${widgetId}`}><FaArrowsAlt /></Link>}
                        {isEditDashboard && <FaClose onClick={isEditing ? this.saveAndClose : this.onDelete} />}
                    </div>
                </div>
                <div className='widget-content'>
                    {children}
                </div>
            </div>
        </div>
        )
    }
}

export default connect()(BaseWidget)