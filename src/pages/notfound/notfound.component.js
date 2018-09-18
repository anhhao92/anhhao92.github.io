import React from 'react';
import './notfound.css';

export default () => {
  return (
    <div className="form-container d-flex">
      <div className="text-center m-auto">
        <h2 className="error-content">404 - PAGE NOT FOUND</h2>
        <a class="btn btn-primary" href="/">
          Home
        </a>
      </div>
    </div>
  );
};
