import firebase, { getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env. FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APPID
};
const app = !getApps().length ?
    firebase.initializeApp(clientCredentials) : getApp()

const auth = getAuth(app);
export {app,auth}
export default firebase; 