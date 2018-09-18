import React from 'react';
import './notfound.css';

export default () => {
  return (
    <div className="error-container d-flex">
      <div className="text-center m-auto">
        <h2 className="error-content">404 - PAGE NOT FOUND</h2>
        <a className="btn btn-primary" href="/">
          Home
        </a>
      </div>
    </div>
  );
};
