import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfLQqZzMFmVjBtzDlpfpIM19zm6oZmZu4",
  authDomain: "imclose-cbd56.firebaseapp.com",
  projectId: "imclose-cbd56",
  storageBucket: "imclose-cbd56.appspot.com",
  messagingSenderId: "69500326429",
  appId: "1:69500326429:web:7d1a95392a4843d7446cf4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);