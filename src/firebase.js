//Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyCPmENYraG5-Wm5b-Kz2yKRaIwoUAwlUo0",
    authDomain: "login-react-c01d2.firebaseapp.com",
    projectId: "login-react-c01d2",
    storageBucket: "login-react-c01d2.appspot.com",
    messagingSenderId: "1056861911604",
    appId: "1:1056861911604:web:7b2c614252db25f1c5a861"
};

//Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);