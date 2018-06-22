import React from 'react'
import {BaseWidget} from '../../components/BaseWidget/BaseWidget.component'
import './dashboard.css'

export const DashboardView = ({dashboard}) => {
    return (
        <div className='container-fluid'>
            <div className='dashboard__title'>{dashboard.title}</div>
            <div className='row'>
                { dashboard.widgets.map(m => <BaseWidget key={m.widgetId} {...m} />) }
            </div>
        </div>
    )
}