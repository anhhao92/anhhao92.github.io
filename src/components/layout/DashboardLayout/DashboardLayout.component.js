import React from 'react';
import Header from '../Header/Header.component';
import './dashboard.scss';

export default ({ children }) => (
  <div className="l-dashboard">
    <Header />
    {children}
  </div>
);
