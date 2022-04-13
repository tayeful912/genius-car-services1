// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9r2yO18NMmh9e_T2zHSJktOwujkdmEv0",
    authDomain: "genius-car-services-d3c1c.firebaseapp.com",
    projectId: "genius-car-services-d3c1c",
    storageBucket: "genius-car-services-d3c1c.appspot.com",
    messagingSenderId: "956203366174",
    appId: "1:956203366174:web:126a523f7253adc37f7b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;