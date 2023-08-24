import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDxa7Z9mpxNux7BDNwLuQvGtv2ShLh-71Y",
  authDomain: "digitalstore-7b79c.firebaseapp.com",
  projectId: "digitalstore-7b79c",
  storageBucket: "digitalstore-7b79c.appspot.com",
  messagingSenderId: "802653175204",
  appId: "1:802653175204:web:561450a21b68e4c22f9531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
