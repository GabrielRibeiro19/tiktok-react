import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBixalmbviArP4-zNzhcw2rFELKAJI9Hx8',
  authDomain: 'tiktok-b181c.firebaseapp.com',
  projectId: 'tiktok-b181c',
  storageBucket: 'tiktok-b181c.appspot.com',
  messagingSenderId: '524135054473',
  appId: '1:524135054473:web:def8d68e24d2d982b91a58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
