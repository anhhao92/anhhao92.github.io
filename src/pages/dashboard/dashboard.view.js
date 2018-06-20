import React from 'react'
import {BaseWidget} from '../../components/base-widget/base.component'
import './dashboard.css'

export const DashboardView = ({dashboard}) => {
    return (
        <div className='container-fluid'>
            <div className='dashboard__title'>{dashboard.title}</div>
            <div className='dashboard__body'>
                { dashboard.widgets.map(m => <BaseWidget key={m.widgetId} {...m} />) }
            </div>
        </div>
    )
}