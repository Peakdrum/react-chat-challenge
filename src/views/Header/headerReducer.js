const defaults = {
  greeting: 'Welcome to the React Skeleton starter kit!',
  subGreeting: '',
};

export default function appReducer(state = defaults, action) {
  switch(action.type) {
    case 'SET_SUBGREETING': {
      const { subGreeting } = action.payload;

      return { ...state, subGreeting };
    }
    default:
      return state;
  }
}
