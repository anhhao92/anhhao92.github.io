import React from 'react';
import {FaCog, FaArrowsAlt, FaClose} from 'react-icons/lib/fa';
import './base.css';

export default ({title, isEdit, children}) => (
    <div className="col-4">
        <div className='widget'>
            <div className='widget-header'>
                <div className='widget-header__text'>{title}</div>
                <div className='widget-header__icon-group'>
                    {isEdit && <FaCog />}
                    {isEdit && <FaArrowsAlt className="pointer"/>}
                    <FaClose />
                </div>
            </div>
            <div className='widget-content'>
                {children}
            </div>
        </div>
    </div>
)
