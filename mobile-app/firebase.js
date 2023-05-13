// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-L7CUF8QqvbXH2z11kiMpXaNKQpESAAw",
    authDomain: "myfootprint-411c3.firebaseapp.com",
    projectId: "myfootprint-411c3",
    storageBucket: "myfootprint-411c3.appspot.com",
    messagingSenderId: "144530944928",
    appId: "1:144530944928:web:9ab9e3476629a479a32ac5",
    measurementId: "G-X5Y367D4H3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = getAuth();

export { auth };