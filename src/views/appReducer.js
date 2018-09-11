const defaults = {
  example: 'Example default state',
  fetchChatPending: false,
  chats: {},
  displayKey: ''
};

export default function appReducer(state = defaults, action) {
  switch(action.type) {
    case 'APP_EXAMPLE_ACTION': {
      console.log('An action was fired and the state changed');

      return {
        ...state,
        example: 'Examples are RAD!'
      };
    }
    case 'SET_CHAT_PENDING':
      return {
        ...state,
        fetchChatPending: true
      }
    case 'SET_CHAT_SUCCESS':
      return {
        ...state,
        chats: action.chats,
        displayKey: Object.keys(action.chats)[0]
      }
    case 'SET_CHAT_BOX':
      return {
        ...state,
        displayKey: action.displayKey 
      }
    case 'UPDATE_CHAT':
      return {
        ...state,
        chats:{
          ...state.chats,
          [action.payload.chatId]:{
            ...state.chats[action.payload.chatId],
            chatHistory: action.payload.chat
          }
        }
      }
    case 'SET_CHAT_ERROR':
    default:
      return state;
  }
}
