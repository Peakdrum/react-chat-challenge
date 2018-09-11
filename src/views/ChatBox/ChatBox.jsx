import React, { Component } from 'react'
import chatboxStyles from './ChatBox.scss';
import { Avatar, Grid, Input, Button } from '@material-ui/core';
import { sendTextMessage, updateChatWhenDbChange } from '../appActions';


class ChatBox extends Component {

    componentDidUpdate(prevProps, prevState, snapshot){
        prevProps.app.displayKey !== this.props.app.displayKey && 
            updateChatWhenDbChange(prevProps.app.displayKey, this.props.app.displayKey)
    }

    render() {
        const chat = this.props.app.chats[this.props.app.displayKey]
        return chat ? <Grid className={chatboxStyles.chatbox}>
            <ChatHead chat={chat} {...this.props}/>
            <ChatBody chat={chat} {...this.props} />
            <ChatInput chat={chat} {...this.props} />
        </Grid>:<div>loading</div>
    }
}

export default ChatBox

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
                (chatSeq, key) => chatSeq.sender === props.chat.name ? 
                    <MessageBoxAsSender key={'sender'+key} context={chatSeq.context}/>:
                    <MessageBoxAsReceiver key={'receiver'+key} context={chatSeq.context}/>
             )
        }
    </Grid>
}

class ChatInput extends Component {
    state={
        inputText: ''
    }

    onChange = e => this.setState({
        [e.target.name]:e.target.value
    })
    

    render() {
        return (
            <div className={chatboxStyles.inputwrapper}>
                    <Input name="inputText" className={chatboxStyles.input} rows="3" multiline value={this.state.inputText} onChange={this.onChange}/>
                    <Button className={chatboxStyles.sendbutton} 
                        onClick={()=>{
                            sendTextMessage(this.props.app.displayKey,this.props.chat.phone, this.state.inputText)
                            this.setState({inputText:''})}
                        }
                    >Send</Button>
            </div>
        )
  }
}


const MessageBoxAsReceiver = props => <div className={chatboxStyles.receiverwrapper}><div className={chatboxStyles.messagereceiver}>{props.context}</div></div>
const MessageBoxAsSender = props => <div className={chatboxStyles.senderwrapper}><div className={chatboxStyles.messagesender}>{props.context}</div></div>