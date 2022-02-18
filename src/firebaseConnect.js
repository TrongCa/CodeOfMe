import * as firebase from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB-pxsSePaKJTfT2CQ4sBikAJxpmXUWzS4",
  authDomain: "worktodo-51722.firebaseapp.com",
  databaseURL: "https://worktodo-51722-default-rtdb.firebaseio.com",
  projectId: "worktodo-51722",
  storageBucket: "worktodo-51722.appspot.com",
  messagingSenderId: "606998545451",
  appId: "1:606998545451:web:7370231e89aed32ebe166e",
  measurementId: "G-7Y92GQHCK4"
};
firebase.initializeApp(firebaseConfig)
const db = getDatabase();
  const abc= ref(db,'note/');
  export const noteData =abc;