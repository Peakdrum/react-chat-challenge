import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import appStyles from './App.scss';
import { connect } from 'react-redux'

import Header from './Header/Header';
import Body from './Body/Body';
import ChatList from './ChatList/ChatList';
import ChatBox from './ChatBox/ChatBox';
import { fetchChats, setChatBox, sendTextMessage} from './appActions'

class App extends Component{

  componentDidMount(){
    fetchChats()
  }

  render(){
    return <div className={appStyles.main}>
      <Body>
        <Grid container spacing={24}>
          <Grid className={appStyles.griditem} item xs={3}>
            <ChatList {...this.props} setChatBox={setChatBox}/>
          </Grid>
          <Grid className={appStyles.griditem} item xs>
            <ChatBox {...this.props} sendTextMessage={sendTextMessage}/>
          </Grid>
        </Grid>
      </Body>
    </div>
  }
}

const mapStateToProps = state => ({
  app: state.app
})


export default connect(mapStateToProps)(App);
