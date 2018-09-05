import store from '../store';
import firebase from '../../firebase';
const { dispatch } =store;

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