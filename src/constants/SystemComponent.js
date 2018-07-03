import TextWidget from '../components/TextWidget/TextWidget.component';
import TableWidget from '../components/TableWidget/TableWidget.component';
import TodoWidget from '../components/TodoWidget/TodoWidget.component';
import SimpleChartWidget from '../components/SimpleChartWidget/SimpleChart.component';
import StockTickerWidget from '../components/StockTickerWidget/StockTickerWidget.component';
import OrgChartWidget from '../components/OrgChartWidget/OrgChartWidget.component';

import TextSetting from '../components/TextWidget/TextSetting.component';
import TableSetting from '../components/TableWidget/TableSetting.component';
import SimpleChartSetting from '../components/SimpleChartWidget/SimpleChartSetting.component';
import StockTickerSetting from '../components/StockTickerWidget/StockTickerSetting.component';
import OrgChartSetting from '../components/OrgChartWidget/OrgChartSetting.component';

export const SYSTEM_COMPONENTS = {
  TEXT_WIDGET: TextWidget,
  DATATABLE_WIDGET: TableWidget,
  TODOLIST_WIDGET: TodoWidget,
  SIMPLECHART_WIDGET: SimpleChartWidget,
  STOCK_TICKER_WIDGET: StockTickerWidget,
  ORG_CHART_WIDGET: OrgChartWidget
};

export const SETTING_COMPONENTS = {
  TEXT_WIDGET: TextSetting,
  DATATABLE_WIDGET: TableSetting,
  SIMPLECHART_WIDGET: SimpleChartSetting,
  STOCK_TICKER_WIDGET: StockTickerSetting,
  ORG_CHART_WIDGET: OrgChartSetting
};
