import React from 'react';
import chatboxStyles from './ChatBox.scss';
import { Avatar, Grid, Input, Button } from '@material-ui/core';


export default props => {
    const chat = props.app.chats[props.app.displayKey]
    return <Grid className={chatboxStyles.chatbox}>
        <ChatHead chat={chat} {...props}/>
        <ChatBody chat={chat} {...props} />
        <ChatInput {...props} />
    </Grid>
}

const ChatHead = props => <Grid container spacing={24} className={chatboxStyles.chathead}>
<Grid item xs={1}>
    <Avatar  alt="Remy Sharp" src={props.chat && props.chat.avatar}/>
</Grid>
<Grid item xs={5}>
    <h2 className={chatboxStyles.header}>Chat with {props.chat && props.chat.name || "name"}</h2>
    <h3 className={chatboxStyles.subheader} >already {props.chat && props.chat.chatHistory.length || 0} messages</h3>
</Grid>
</Grid>

const ChatBody = props => {
    return <Grid item className={chatboxStyles.chatbody}>
        {
            props.chat && props.chat.chatHistory.map( 
                chatSeq => chatSeq.sender === props.chat.name ? 
                    <MessageBoxAsSender context={chatSeq.context}/>:
                    <MessageBoxAsReceiver context={chatSeq.context}/>
             )
        }
    </Grid>
}

const ChatInput = props => <div className={chatboxStyles.inputwrapper}>
        <Input className={chatboxStyles.input} rows="3" multiline />
        <Button className={chatboxStyles.sendbutton}>Send</Button>
</div>

const MessageBoxAsReceiver = props => <div className={chatboxStyles.receiverwrapper}><div className={chatboxStyles.messagereceiver}>{props.context}</div></div>
const MessageBoxAsSender = props => <div className={chatboxStyles.senderwrapper}><div className={chatboxStyles.messagesender}>{props.context}</div></div>