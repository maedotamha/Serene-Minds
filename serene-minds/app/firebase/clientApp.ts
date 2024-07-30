// import firebase, { FirebaseOptions, getApp, getApps } from "firebase/app";
// import { initializeApp} from "firebase/app";
// import { getAuth, initializeAuth } from "firebase/auth";
// import "firebase/firestore";

// const clientCredentials = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
//   appId: process.env.FIREBASE_APPID
// };

// // let app;
// // export auth = initializeAuth(app, {
  
// // })
// // try {
// //   app = initializeApp(clientCredentials);
// // } catch (error) {
// //   console.error("Error initializing Firebase app:", error);
// // }

// // let auth

// // try {
// //   auth = getAuth(app);
// // } catch (error) {
// //   console.error("Error initializing Firebase auth:", error);
// // }

// // export { app, auth };
// // export default firebase;

// export const app = (options: FirebaseOptions) => {
//   return !getApps().length ? initializeApp(options) : getApp();
// };

// export const useFirebaseAuth = () => {
//   const getFirebaseAuth = getAuth(app(clientCredentials));
//   return { getFirebaseAuth };
// };

// export const auth = getAuth(app(clientCredentials));
// export default firebase;
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APPID
};

// Initialize Firebase app
const app = initializeApp(clientCredentials);

// Get the Firebase Auth instance
const auth = getAuth(app);

export { auth, app };