import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'

const firebaseConfig = ({
    apiKey: "AIzaSyDwDet8TCQAI2VC7eM_mBNRprB2tL6f5lU",
    authDomain: "todolist-56e42.firebaseapp.com",
    databaseURL: "https://todolist-56e42-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "todolist-56e42",
    storageBucket: "todolist-56e42.appspot.com",
    messagingSenderId: "1030515249317",
    appId: "1:1030515249317:web:fb96cc9346cf09d66afd4c"
});

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const TODOS_REF = '/todos/';