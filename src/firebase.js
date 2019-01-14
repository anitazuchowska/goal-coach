import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDUbyZL7nJqAQwC2OXKPSVOPqsob0pzbyw",
    authDomain: "goalcoach-a4696.firebaseapp.com",
    databaseURL: "https://goalcoach-a4696.firebaseio.com",
    projectId: "goalcoach-a4696",
    storageBucket: "goalcoach-a4696.appspot.com",
    messagingSenderId: "1056090368933"
};

export const firebaseApp = firebase.initializeApp(config);
