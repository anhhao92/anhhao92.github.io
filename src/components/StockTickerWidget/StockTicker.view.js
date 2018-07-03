import React from 'react';
import { Table } from 'reactstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/lib/fa';
import './stock.css';

export const StockItem = ({ code }) => (
  <span className="badge badge-info">
    {code} <span className="stock-close">&times;</span>
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
