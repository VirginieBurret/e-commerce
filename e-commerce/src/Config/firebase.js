import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYCd568B_vCeLx-fjrkMjtRBZ6aEFoMfA",
    authDomain: "e-commerce-40cdf.firebaseapp.com",
    projectId: "e-commerce-40cdf",
    storageBucket: "e-commerce-40cdf.appspot.com",
    messagingSenderId: "858292867506",
    appId: "1:858292867506:web:e21175be6fbf27c3eb94ab"

})

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};