import React from 'react';
import TextWidget from '../TextWidget/TextWidget.component';
import TableWidget from '../TableWidget/TableWidget.component';
import TodoWidget from '../TodoWidget/TodoWidget.component';
import SimpleChartWidget from '../SimpleChartWidget/SimpleChart.component';
import StockTickerWidget from '../StockTickerWidget/StockTickerWidget.component';
import OrgChartWidget from '../OrgChartWidget/OrgChartWidget.component';
import {FaCog, FaArrowsAlt, FaClose} from 'react-icons/lib/fa';
import './base.css';

const SYSTEM_COMPONENTS = {
    'TEXT_WIDGET': TextWidget,
    'DATATABLE_WIDGET': TableWidget,
    'TODOLIST_WIDGET': TodoWidget,
    'SIMPLECHART_WIDGET': SimpleChartWidget,
    'STOCK_TICKER_WIDGET': StockTickerWidget,
    'ORG_CHART_WIDGET': OrgChartWidget
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
