import React from 'react';

import bodyStyles from './Body.scss';

const Body = ({ children }) => (
  <div className={bodyStyles.main}>
      {children}
  </div>
);

export default Body;
