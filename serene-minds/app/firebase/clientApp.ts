import firebase from "firebase/app";
import { initializeApp} from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APPID
};

let app;
export auth = initializeAuth(app, {
  
})
try {
  app = initializeApp(clientCredentials);
} catch (error) {
  console.error("Error initializing Firebase app:", error);
}

let auth

try {
  auth = getAuth(app);
} catch (error) {
  console.error("Error initializing Firebase auth:", error);
}

export { app, auth };
export default firebase;