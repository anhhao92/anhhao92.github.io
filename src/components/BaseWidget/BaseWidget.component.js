import React from 'react';
import { FaCog, FaArrowsAlt, FaClose } from 'react-icons/lib/fa';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DashboardActionCreator } from '../../actions/dashboard.action';
import './base.css';

class BaseWidget extends React.PureComponent {
    onClickSetting = () => {
        console.log(this.props.id)
    }

    onDelete = () => {
        const {dispatch, id} = this.props;
        dispatch(DashboardActionCreator.deleteWidget(id));
    }

    render() {
        const {title, isEdit, id, children} = this.props;
        return (
            <div className="col-4">
            <div className='widget'>
                <div className='widget-header'>
                    <div className='widget-header__text'>{title}</div>
                    <div className='widget-header__icon-group'>
                        {isEdit && <FaCog onClick={this.onClickSetting} />}
                        <Link to={`/view/${id}`}><FaArrowsAlt /></Link>
                        {isEdit && <FaClose onClick={this.onDelete} />}
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