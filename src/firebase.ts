// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,  GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkk7zFRjE4CnyFb5Nmbt-5X3VsmYOVtD4",
  authDomain: "todolist-joshdev.firebaseapp.com",
  projectId: "todolist-joshdev",
  storageBucket: "todolist-joshdev.appspot.com",
  messagingSenderId: "929734745919",
  appId: "1:929734745919:web:ffa8123c9ccb84bca97d8a",
  measurementId: "G-VL59ZJJMS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { app, auth, googleProvider, githubProvider };