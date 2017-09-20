import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCNI3318aHuQ3G16uhkUJxjBKBjZiIewOc",
    authDomain: "redux-firebase-79a43.firebaseapp.com",
    databaseURL: "https://redux-firebase-79a43.firebaseio.com",
    projectId: "redux-firebase-79a43",
    storageBucket: "redux-firebase-79a43.appspot.com",
    messagingSenderId: "235064820696"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
