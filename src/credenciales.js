// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSs_GOQXjVTUgihhC0_UkyKkA5VD6tgis",
  authDomain: "pinterest-base.firebaseapp.com",
  projectId: "pinterest-base",
  storageBucket: "pinterest-base.appspot.com",
  messagingSenderId: "210915077748",
  appId: "1:210915077748:web:f7529b55da5f29559f6b21"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
