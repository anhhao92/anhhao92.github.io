import React from 'react';
import BaseWidget from '../BaseWidget/BaseWidget.component';
import { FaPlus } from 'react-icons/lib/fa';
import './placeHolder.css';

export const PlaceHolderWidgetView = () => {
  return (
    <BaseWidget title="Add Widget">
      <div className="add-content">
        <FaPlus size={100} />{' '}
      </div>
    </BaseWidget>
  );
};
