import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDwq3GFTxwAiEsevg7hLdavpdfN9i7PzOs",
    authDomain: "login-d17d8.firebaseapp.com",
    projectId: "login-d17d8",
    storageBucket: "login-d17d8.appspot.com",
    messagingSenderId: "405090433483",
    appId: "1:405090433483:web:112535c079c3b2905e9e4e"
  };

  let fire = null;

  if (!firebase.apps.length) {
     fire =  firebase.initializeApp(firebaseConfig);
  }else {
    fire  = firebase.app(); // if already initialized, use that one
  }
// const provider = new fire.auth().GoogleAuthProvider();
export default fire ;