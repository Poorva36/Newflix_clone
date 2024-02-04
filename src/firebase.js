// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKFrfkGw1uBALRK8mMDy36lL7FRzNI_w",
  authDomain: "netflex-react-575fb.firebaseapp.com",
  projectId: "netflex-react-575fb",
  storageBucket: "netflex-react-575fb.appspot.com",
  messagingSenderId: "611130688874",
  appId: "1:611130688874:web:0a615d0bfb341c7128d113",
};
// REACT_APP_FIREBASE_API_KEY=  AIzaSyAMKFrfkGw1uBALRK8mMDy36lL7FRzNI_w
// REACT_APP_FIREBASE_AUTH_DOMAIN= netflex-react-575fb.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID= netflex-react-575fb
// REACT_APP_FIREBASE_STORAGE_BUCKET= netflex-react-575fb.appspot.com
// REACT_APP_MESSAGING_SENDER= 611130688874
// REACT_APP_APP_ID= 1:611130688874:web:0a615d0bfb341c7128d113

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// export {app , auth} from firebaseConfig;
