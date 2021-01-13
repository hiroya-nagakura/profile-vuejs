import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDtmXVMNx5v0vQmxWJenGd2QGbkEtbkInI",
  authDomain: "hiroya-nagakura.firebaseapp.com",
  projectId: "hiroya-nagakura",
  storageBucket: "hiroya-nagakura.appspot.com",
  messagingSenderId: "876982721808",
  appId: "1:876982721808:web:846d849ca357a58eac9995",
  measurementId: "G-JBR92MMWF4"
};
firebase.initializeApp(config);
export const functions = firebase.functions();