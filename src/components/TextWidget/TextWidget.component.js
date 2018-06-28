import React from 'react';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

export default ({ configs }) => {
  const contentState = configs.rawContent && convertFromRaw(configs.rawContent);
  const htmlMarkup = contentState && stateToHTML(contentState);
  return (
    <div
      className="box-view"
      dangerouslySetInnerHTML={{ __html: htmlMarkup }}
    />
  );
};
