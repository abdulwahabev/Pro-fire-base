// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCxRbsDItFlP0K5H8iyVZKnwJVBzBmFuiQ",
    authDomain: "smit-pro-1.firebaseapp.com",
    projectId: "smit-pro-1",
    storageBucket: "smit-pro-1.firebasestorage.app",
    messagingSenderId: "729001400137",
    appId: "1:729001400137:web:fcca63ea34455b2d89ec98",
    measurementId: "G-Q76RDG0JNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth, analytics }