// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8IDlctJa0Anb9NQ-687ji_6gvIsCRXKI",
  authDomain: "news-dragons-client.firebaseapp.com",
  projectId: "news-dragons-client",
  storageBucket: "news-dragons-client.appspot.com",
  messagingSenderId: "549892815747",
  appId: "1:549892815747:web:dab83081deef232bc4d4b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app