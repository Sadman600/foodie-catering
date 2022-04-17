// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuDR4612QTcDvb8DRVtOjGCYSN8lLnC1M",
    authDomain: "foodie-catering-service.firebaseapp.com",
    projectId: "foodie-catering-service",
    storageBucket: "foodie-catering-service.appspot.com",
    messagingSenderId: "377208818714",
    appId: "1:377208818714:web:00a603401d2f6920dcd5a3"
};
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;