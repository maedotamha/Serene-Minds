import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnaMwAJmN0evFgg_qQmBoJwecLmcc5yhI",
  authDomain: "serene-minds.firebaseapp.com",
  projectId: "serene-minds",
  storageBucket: "serene-minds.appspot.com",
  messagingSenderId: "930992686638",
  appId: "1:930992686638:web:4b93b8101b8165856301bf"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export{app, auth}