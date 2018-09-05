const defaults = {
  example: 'Example default state',
  fetchChatPending: false,
  chats: {}
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
        chats: action.chats
      }
    case 'SET_CHAT_ERROR':
    default:
      return state;
  }
}
