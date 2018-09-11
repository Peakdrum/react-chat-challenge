import store from '../store';
import firebase from '../../firebase';
const { dispatch } =store;
import axios from 'axios';

export function placeholder() {
  // Wrapping the returned object in the dispatch() call is unconventional,
  // but the conventional method of mapping dispatch to props and importing
  // the action is unnecessarily redundant
  return dispatch({
    type: 'APP_EXAMPLE_ACTION'
  });
}

export function fetchChats() {
    dispatch(fetchChatsPending())
    return firebase
      .database()
      .ref('chat')
      .once('value')
      .then(snap => snap.val())
      .then(chats => dispatch(receiveChats(chats)))
      .catch( err => dispatch(fetchChatsError(err)))
}

export function updateChatWhenDbChange(prevChatId, chatId){
  var prevChatRef = firebase.database().ref('chat/' + prevChatId)
  prevChatRef.off()
  var chatRef = firebase.database().ref('chat/' + chatId);
  chatRef.on('child_changed', function(data) {
    updateChat(chatId, data.val())
  });
}

function updateChat( chatId, chat ){
  console.log('updatechat', chat)
  return dispatch({
    type: 'UPDATE_CHAT',
    payload: {
      chatId,
      chat
    }
  })
}

function fetchChatsPending() {
  return dispatch({type:'SET_CHAT_PENDING'})
}

function receiveChats(chats) {
  return dispatch({type:'SET_CHAT_SUCCESS', chats})
}

function fetchChatsError(err) {
  return dispatch({type:'SET_CHAT_ERROR', payload: err})
}

export function setChatBox(displayKey) {
  return dispatch({
    type:'SET_CHAT_BOX',
    displayKey
  })
}


export function sendTextMessage(chatId, phoneNumber, text){
  saveChat(chatId, text)
  // axios.post('/api/sendMessage/+15867881607/'+'+66944349911'+'/'+text)
  // .then(function (response) {
  //   if(response.status === 200){
  //     saveChat()
  //   }
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
}

export function saveChat(chatId, text){
  const toUpdateChatNode = 'chat/'+chatId+'/chatHistory'
  firebase
    .database()
    .ref(toUpdateChatNode)
    .once('value')
    .then(snap=>snap.val())
    .then(chatHistory=> {
      chatHistory.push({
        context: text,
        type:'text',
        sender:'admin',
        dateAdded: Date.now()
      })
      return chatHistory
    })
    .then(
      newChatHistory => firebase
        .database()
        .ref(toUpdateChatNode)
        .set(newChatHistory)
    )
} 