import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDpZusxg59UyTdhoGYg4wz5WhfK8o0qCIg',
  authDomain: 'fir-practica-365d2.firebaseapp.com',
  projectId: 'fir-practica-365d2',
  storageBucket: 'fir-practica-365d2.appspot.com',
  messagingSenderId: '588324624234',
  appId: '1:588324624234:web:d9ff640273efd36805b713',
  measurementId: 'G-PPY05XED65',
};

initializeApp(firebaseConfig);
export const database = getFirestore();
