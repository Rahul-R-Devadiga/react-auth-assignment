// Replace with your actual Firebase project config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCvGiZn2dJG10jlj1cSUZRh248JTlf1P9I",
    authDomain: "react-auth-assignment-7c3a4.firebaseapp.com",
    projectId: "react-auth-assignment-7c3a4",
    storageBucket: "react-auth-assignment-7c3a4.firebasestorage.app",
    messagingSenderId: "669868439928",
    appId: "1:669868439928:web:1404da9d8459f2d38db08d",
    measurementId: "G-075JHCX5EH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
