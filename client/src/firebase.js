import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey:"AIzaSyBoxU5B5aDZ44UxFz9LnmqtjS4pn49rq1Y",
    authDomain: "tripster-315102.firebaseapp.com",
    databaseURL: "https://tripster-315102-default-rtdb.firebaseio.com/",
    projectId: "tripster-315102",
    storageBucket: "tripster-315102.appspot.com",
    messagingSenderId: "490208347772",
    appId: "1:490208347772:web:701c02ea50713619ee2bf9"
})

export const auth = app.auth()

export default app;