import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzJ7iBfWwvI9ploLpJ9o8JXS1Iizv6Mvo",
    authDomain: "linkedin-clone-e2d4a.firebaseapp.com",
    projectId: "linkedin-clone-e2d4a",
    storageBucket: "linkedin-clone-e2d4a.appspot.com",
    messagingSenderId: "985845177493",
    appId: "1:985845177493:web:fc0189ab60cd0f46860f9c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};