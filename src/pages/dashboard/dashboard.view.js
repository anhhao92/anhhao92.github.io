import React from 'react';
import BaseWidget from '../../components/BaseWidget/BaseWidget.component';
import BaseSetting from '../../components/WidgetSetting/BaseSetting.component';
import { FaStop, FaThList, FaTh, FaThLarge } from 'react-icons/lib/fa';
import { MdViewArray } from 'react-icons/lib/md';
import { LAYOUT_TYPES, SYSTEM_COMPONENTS } from '../../constants';
import './dashboard.css';

export const DashboardView = ({ dashboard, onChangeLayout }) => {
  const widgets = dashboard.widgets.map(props => {
    const WidgetComponent = props.isEditing
      ? BaseSetting
      : SYSTEM_COMPONENTS[props.widgetType];

    return (
      <BaseWidget
        key={props.widgetId}
        isEditDashboard={dashboard.isEdit}
        {...props}
      >
        <WidgetComponent {...props} />
      </BaseWidget>
    );
  });

  return (
    <div className="container-fluid">
      <div className="dashboard__title">
        <span>{dashboard.title}</span>
        <span className="dashboard-layout">
          <FaStop
            className={
              dashboard.layoutType === LAYOUT_TYPES.A_COLUMN
                ? 'dashboard-layout--active'
                : ''
            }
            onClick={() => onChangeLayout(LAYOUT_TYPES.A_COLUMN)}
          />
          <FaThLarge
            className={
              dashboard.layoutType === LAYOUT_TYPES.AA_COLUMN
                ? 'dashboard-layout--active'
                : ''
            }
            onClick={() => onChangeLayout(LAYOUT_TYPES.AA_COLUMN)}
          />
          <FaTh
            className={
              dashboard.layoutType === LAYOUT_TYPES.AAA_COLUMN
                ? 'dashboard-layout--active'
                : ''
            }
            onClick={() => onChangeLayout(LAYOUT_TYPES.AAA_COLUMN)}
          />
          <FaThList
            className={
              dashboard.layoutType === LAYOUT_TYPES.AB_COLUMN
                ? 'dashboard-layout--active'
                : ''
            }
            onClick={() => onChangeLayout(LAYOUT_TYPES.AB_COLUMN)}
          />
          <MdViewArray
            className={
              dashboard.layoutType === LAYOUT_TYPES.ABA_COLUMN
                ? 'dashboard-layout--active'
                : ''
            }
            onClick={() => onChangeLayout(LAYOUT_TYPES.ABA_COLUMN)}
            size={30}
          />
          <FaThList
            className={
              dashboard.layoutType === LAYOUT_TYPES.BA_COLUMN
                ? 'dashboard-layout--active'
                : ''
            }
            onClick={() => onChangeLayout(LAYOUT_TYPES.BA_COLUMN)}
            style={{ transform: 'scaleX(-1)' }}
          />
        </span>
      </div>
      <div id="wrapper" className="wrapper row">
        {widgets}
      </div>
    </div>
  );
};
