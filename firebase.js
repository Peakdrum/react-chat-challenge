import firebase from 'firebase'

const  config = {
    apiKey: "AIzaSyCVOVN7FSjgGT868iwUMppcvyoZwEAkkF0",
    authDomain: "peak-impikable-chat.firebaseapp.com",
    databaseURL: "https://peak-impikable-chat.firebaseio.com",
    projectId: "peak-impikable-chat",
    storageBucket: "peak-impikable-chat.appspot.com",
    messagingSenderId: "477782919579"
  };

  firebase.initializeApp(config);

  export default firebase