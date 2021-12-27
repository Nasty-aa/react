// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD78lW3wgbjVmr67W5D_Zp6YORPhz71zi0",
  authDomain: "chats-7dabd.firebaseapp.com",
  databaseURL: "https://chats-7dabd-default-rtdb.firebaseio.com",
  projectId: "chats-7dabd",
  storageBucket: "chats-7dabd.appspot.com",
  messagingSenderId: "289923750875",
  appId: "1:289923750875:web:60f345897a8ef3566be5fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const chatsRef = db.ref("chats");
