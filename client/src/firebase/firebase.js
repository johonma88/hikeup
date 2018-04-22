import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyCT0H0RTW76sEGHeMCMSQDVCGb8J6NbZso",
  authDomain: "hikeup-81ec5.firebaseapp.com",
  databaseURL: "https://hikeup-81ec5.firebaseio.com",
  projectId: "hikeup-81ec5",
  storageBucket: "hikeup-81ec5.appspot.com",
  messagingSenderId: "871593026828"
};

const devConfig = {
  apiKey: "AIzaSyCT0H0RTW76sEGHeMCMSQDVCGb8J6NbZso",
  authDomain: "hikeup-81ec5.firebaseapp.com",
  databaseURL: "https://hikeup-81ec5.firebaseio.com",
  projectId: "hikeup-81ec5",
  storageBucket: "hikeup-81ec5.appspot.com",
  messagingSenderId: "871593026828"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
