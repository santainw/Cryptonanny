import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Routes, store, service } from 'configs'
import { environment } from 'const'
import 'assets/styles/global.scss'

import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const storeOfProvider = store(environment.projectName)
service({}, store)

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {

  useEffect(() => {
    localStorage.removeItem('user_wallet')
  })
  return (
    <Provider store={storeOfProvider}>
      <Routes />
    </Provider>
  );
}

export default App;
