import React, {Component} from 'react';
import chatListStyles from './ChatList.scss';
import { List, ListItem, Avatar, ListItemText, Button } from '@material-ui/core';
import SearchBox from '../SearchBox/SearchBox';
import firebase from '../../../firebase';

class ChatList extends Component{

  render(){
    return(
      <div className={chatListStyles.chatbox}>
          <SearchBox/>
          <List>
                {[0, 1, 2, 3].map(value => (
                  <ListItem className={chatListStyles.list} key={value} dense button>
                    <Avatar alt="Remy Sharp" src="http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg" />
                    <ListItemText className={chatListStyles.text} primary={`Line item ${value + 1}`} />
                  </ListItem>
                ))}
          </List>
      </div>
    )
  }
}

export default ChatList