import React from 'react';
import { Table } from 'reactstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/lib/fa';
import './stock.scss';

export const StockItem = ({ stock, onRemove }) => (
  <span className="badge badge-info">
    {stock.code}{' '}
    <span onClick={onRemove} className="stock-close">
      &times;
    </span>
  </span>
);

export const StockTickerView = props => {
  return (
    <Table>
      <tbody>
        {props.stocks.map(stock => {
          const adjustmentValue =
            stock.change > 0 ? (
              <span className="arrow-up">
                <FaArrowUp /> {stock.change}
              </span>
            ) : (
              <span className="arrow-down">
                <FaArrowDown /> {stock.change}
              </span>
            );
          return (
            <tr key={stock.id}>
              <th>{stock.code}</th>
              <td>{stock.price}</td>
              <td>{adjustmentValue}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
