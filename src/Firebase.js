import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyCBrm2pA6AzI47JQ9VvZJ55N0cu5n7Adco",
    authDomain: "uas-book-store.firebaseapp.com",
    databaseURL: "https://uas-book-store.firebaseio.com",
    projectId: "uas-book-store",
    storageBucket: "uas-book-store.appspot.com",
    messagingSenderId: "2910994303",
    appId: "1:2910994303:web:6fdf949338fcc82defe44a",
    measurementId: "G-46BPS5NHST"
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;