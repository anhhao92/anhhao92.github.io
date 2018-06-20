import React from 'react';
import TextWidget from '../text-widget/text.component';
import TableWidget from '../table-widget/table.component';
import TodoWidget from '../todo-widget/todo-widget.component';
import SimpleChartWidget from '../SimpleChartWidget/SimpleChart.component';
import {FaCog, FaArrowsAlt, FaClose} from 'react-icons/lib/fa';
import './base.css';

const SYSTEM_COMPONENTS = {
    'TEXT_WIDGET': TextWidget,
    'DATATABLE_WIDGET': TableWidget,
    'TODOLIST_WIDGET': TodoWidget,
    'SIMPLECHART_WIDGET': SimpleChartWidget
}

export class BaseWidget extends React.PureComponent {
	getWidgetContent() {
        const type = this.props.widgetType;
        const Widget = SYSTEM_COMPONENTS[type];
        return <Widget {...this.props} />
	}

    render() {
        return (
            <div className='widget'>
                <div className='widget-header'>
                    <div className='widget-header__text'>{this.props.title}</div>
                    <div className='widget-header__icon-group'>
                        <FaCog />
                        <FaArrowsAlt />
                        <FaClose />
                    </div>
                </div>
                <div className='widget-content'>
                    {this.getWidgetContent()}
                </div>
            </div>
        )
    }
}
