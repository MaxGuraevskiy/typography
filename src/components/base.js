import * as firebase from "firebase/app"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBzD_TNguKd8ZxWvfZS9_Pq9tW2D65CuMk",
    authDomain: "typography-6a616.firebaseapp.com",
    projectId: "typography-6a616",
    storageBucket: "typography-6a616.appspot.com",
    messagingSenderId: "142565940019",
    appId: "1:142565940019:web:982fc2abb0bac74db2fc46",
    measurementId: "G-8L5SGDCRLF"
}

const app = firebase.initializeApp(firebaseConfig)

export default app