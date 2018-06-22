import React from 'react'
import {BaseWidget} from '../../components/BaseWidget/BaseWidget.component'
import {FaStop, FaThList, FaTh, FaThLarge} from 'react-icons/lib/fa';
import {MdViewArray} from 'react-icons/lib/md';
import { LAYOUT_TYPES } from '../../constants/LayoutType';
import './dashboard.css'

export const DashboardView = ({dashboard, onChangeLayout}) => {
    return (
        <div className='container-fluid'>
            <div className='dashboard__title'>
                <span>{dashboard.title}</span>
                <span className="icon-container">
                    <FaStop onClick={() => onChangeLayout(LAYOUT_TYPES.ONE_COLUMN)} />
                    <FaThLarge onClick={() => onChangeLayout(LAYOUT_TYPES.TWO_COLUMN)} />
                    <FaTh onClick={() => onChangeLayout(LAYOUT_TYPES.THREE_COLUMN)}/>
                    <FaThList onClick={() => onChangeLayout(LAYOUT_TYPES.ONE_AND_TWO_COLUMN)}/>
                    <MdViewArray onClick={() => onChangeLayout(LAYOUT_TYPES.ONE_TWO_ONE_COLUMN)} size={30} />
                    <FaThList onClick={() => onChangeLayout(LAYOUT_TYPES.TWO_AND_ONE_COLUMN)} style={{transform: 'scaleX(-1)'}} />
                </span>
            </div>
            <div id="widget-wrapper" className='row'>
                { dashboard.widgets.map(m => <BaseWidget key={m.widgetId} {...m} />) }
            </div>
        </div>
    )
}