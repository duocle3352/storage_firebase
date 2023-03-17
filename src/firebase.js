import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAw9N5dC_UAv_vKTM6aHinV-BeK0gKsZgA",
  authDomain: "fir-c2473.firebaseapp.com",
  projectId: "fir-c2473",
  storageBucket: "fir-c2473.appspot.com",
  messagingSenderId: "99416621169",
  appId: "1:99416621169:web:2f2bd634b04461aa7adbd0",
  measurementId: "G-XDECXM5M83",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
