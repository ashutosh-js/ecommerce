import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUZHh-0S2DTXVsc7Bv5E5OzHcNDgW6c4A",
  authDomain: "ecommerce-3c813.firebaseapp.com",
  projectId: "ecommerce-3c813",
  storageBucket: "ecommerce-3c813.appspot.com",
  messagingSenderId: "943365235927",
  appId: "1:943365235927:web:d738b7bd3eda0685147c92"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth } ;