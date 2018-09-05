import React, {Component} from 'react';
import chatListStyles from './ChatList.scss';
import { List, ListItem, Avatar, ListItemText, Button } from '@material-ui/core';
import SearchBox from '../SearchBox/SearchBox';

class ChatList extends Component{

  render(){
    const {chats} = this.props.app
    return(
      <div className={chatListStyles.chatbox}>
          <SearchBox/>
          <List>
            {
              chats && Object.keys(chats).map( chatKey=> <ListItem className={chatListStyles.list} key={chatKey} dense button onClick={()=>this.props.setChatBox(chatKey)}>
                <Avatar src={chats[chatKey].avatar} />
                <ListItemText className={chatListStyles.text} primary={chats[chatKey].name} />
              </ListItem> )
            }
          </List>
      </div>
    )
  }
}

export default ChatList