import React from 'react';

import bodyStyles from './Body.scss';

const Body = ({ children }) => (
  <div className={bodyStyles.main}>
    <p>
      {children}
    </p>
  </div>
);

export default Body;
