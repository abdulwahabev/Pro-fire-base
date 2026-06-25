import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, analytics, firestore };