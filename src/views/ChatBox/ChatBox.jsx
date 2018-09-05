import React from 'react';
import chatboxStyles from './ChatBox.scss';
import { Avatar, Grid, Input, Button } from '@material-ui/core';


export default props => 
<Grid className={chatboxStyles.chatbox}>
    <ChatHead {...props}/>
    <ChatBody {...props} />
    <ChatInput {...props} />
</Grid>

const ChatHead = props => <Grid container spacing={24} className={chatboxStyles.chathead}>
<Grid item xs={1}>
    <Avatar  alt="Remy Sharp" src="data:image/jpeg;base64,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" />
</Grid>
<Grid item xs={5}>
    <h2 className={chatboxStyles.header}>Chat with {props.name || "name"}</h2>
    <h3 className={chatboxStyles.subheader} >already {props.messageQuantity || 0} messages</h3>
</Grid>
</Grid>

const ChatBody = props => <Grid item className={chatboxStyles.chatbody}>
    <p>chatbody</p>
</Grid>

const ChatInput = props => <Grid container>
    <Grid xs={12} item>
        <Input className={chatboxStyles.input} rows="3" multiline />
    </Grid>
    <Grid xs={12} item>
        <Button className={chatboxStyles.sendbutton}>Send</Button>
    </Grid>
</Grid>