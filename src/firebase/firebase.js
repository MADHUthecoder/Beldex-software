
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvu1hzjrRpobSoWre_gOXEVF4yJ55IFUs",
  authDomain: "beltree.firebaseapp.com",
  projectId: "beltree",
  storageBucket: "beltree.appspot.com",
  messagingSenderId: "833484905271",
  appId: "1:833484905271:web:9e6215be695364a1d7d8b2",
  measurementId: "G-M3N0EBP23B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};