import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyA9iFOOiE5JP8dhRRgU3ce2xC0mmjGL9xQ",
  authDomain: "udemy-clone-dda87.firebaseapp.com",
  projectId: "udemy-clone-dda87",
  storageBucket: "udemy-clone-dda87.appspot.com",
  messagingSenderId: "504872218542",
  appId: "1:504872218542:web:fd9f85798ce71e6bf6623f",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
