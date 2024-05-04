import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEcrZve5NM9Vfk2MjtylGWBDAbKTSOJB4",
  authDomain: "eco-praia.firebaseapp.com",
  projectId: "eco-praia",
  storageBucket: "eco-praia.appspot.com",
  messagingSenderId: "188077463006",
  appId: "1:188077463006:web:9c5e7d9e24f6e02346394f",
  measurementId: "G-V33ZFR6MY5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};