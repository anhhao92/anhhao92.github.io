import React from 'react';
import { Input, Label } from 'reactstrap';
import { FaPieChart, FaLineChart, FaBarChart } from 'react-icons/lib/fa';
import './simpleChart.css';

export const SimpleChartSettingView = props => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <span
          onClick={props.setChartType('pie')}
          className={
            props.configs.chartType === 'pie'
              ? 'chart-type active'
              : 'chart-type'
          }
        >
          <FaPieChart size={40} />
        </span>
        <span
          onClick={props.setChartType('line')}
          className={
            props.configs.chartType === 'line'
              ? 'chart-type active'
              : 'chart-type'
          }
        >
          <FaLineChart size={40} />
        </span>
        <span
          onClick={props.setChartType('bar')}
          className={
            props.configs.chartType === 'bar'
              ? 'chart-type active'
              : 'chart-type'
          }
        >
          <FaBarChart size={40} />
        </span>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <Label>Data source</Label>
            <Input
              type="select"
              defaultValue={props.configs.dataSource}
              onChange={props.setDataSource}
            >
              <option value="contacts">Contacts</option>
              <option value="accounts">Accounts</option>
            </Input>
          </div>
          <div className="col-6">
            <Label>Group by</Label>
            <Input
              type="select"
              defaultValue={props.configs.groupBy}
              onChange={props.setGroupByProperty}
            >
              {props.groups.map(e => (
                <option key={e.value} value={e.value}>
                  {e.name}
                </option>
              ))}
            </Input>
          </div>
        </div>
      </div>
    </div>
  );
};
