import React from 'react';
import { Grid } from '@material-ui/core';
import appStyles from './App.scss';

import Header from './Header/Header';
import Body from './Body/Body';
import ChatList from './ChatList/ChatList';
import ChatBox from './ChatBox/ChatBox';

const App = () => (
  <div className={appStyles.main}>
    <Body>
      <Grid container spacing={24}>
        <Grid className={appStyles.griditem} item xs={3}>
          <ChatList/>
        </Grid>
        <Grid className={appStyles.griditem} item xs>
          <ChatBox/>
        </Grid>
      </Grid>
    </Body>
  </div>
);

export default App;
