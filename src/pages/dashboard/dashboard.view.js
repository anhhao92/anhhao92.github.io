import React from 'react'
import BaseWidget from '../../components/BaseWidget/BaseWidget.component'

import { FaStop, FaThList, FaTh, FaThLarge } from 'react-icons/lib/fa';
import { MdViewArray } from 'react-icons/lib/md';
import { LAYOUT_TYPES, SYSTEM_COMPONENTS } from '../../constants';
import './dashboard.css'

export const DashboardView = ({dashboard, onChangeLayout}) => {
    const widgets = Object.keys(dashboard.widgets).map((id) => {
        const props = dashboard.widgets[id];
        const WidgetComponent = SYSTEM_COMPONENTS[props.widgetType];
        return (    
            <BaseWidget key={id} id={id} title={props.title} isEdit={dashboard.isEdit}>
                <WidgetComponent {...props} />
            </BaseWidget>
        )
     });

    return (
        <div className="container-fluid">
            <div className="dashboard__title">
                <span>{dashboard.title}</span>
                <span className="dashboard-layout">
                    <FaStop 
                        className={dashboard.layoutType === LAYOUT_TYPES.A_COLUMN ? "dashboard-layout--active" : ""} 
                        onClick={() => onChangeLayout(LAYOUT_TYPES.A_COLUMN)} 
                    />
                    <FaThLarge 
                        className={dashboard.layoutType === LAYOUT_TYPES.AA_COLUMN ? "dashboard-layout--active" : ""} 
                        onClick={() => onChangeLayout(LAYOUT_TYPES.AA_COLUMN)} 
                    />
                    <FaTh 
                        className={dashboard.layoutType === LAYOUT_TYPES.AAA_COLUMN ? "dashboard-layout--active" : ""} 
                        onClick={() => onChangeLayout(LAYOUT_TYPES.AAA_COLUMN)}
                    />
                    <FaThList
                        className={dashboard.layoutType === LAYOUT_TYPES.AB_COLUMN ? "dashboard-layout--active" : ""} 
                        onClick={() => onChangeLayout(LAYOUT_TYPES.AB_COLUMN)}
                    />
                    <MdViewArray 
                        className={dashboard.layoutType === LAYOUT_TYPES.ABA_COLUMN ? "dashboard-layout--active" : ""} 
                        onClick={() => onChangeLayout(LAYOUT_TYPES.ABA_COLUMN)}
                        size={30} 
                    />
                    <FaThList
                        className={dashboard.layoutType === LAYOUT_TYPES.BA_COLUMN ? "dashboard-layout--active" : ""} 
                        onClick={() => onChangeLayout(LAYOUT_TYPES.BA_COLUMN)} 
                        style={{transform: 'scaleX(-1)'}} 
                    />
                </span>
            </div>
            <div id="wrapper" className="row">
                {widgets}
            </div>
        </div>
    )
}