import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDjCV2Eh0pbbV6CeoA0xIa_3ku_y0wH-mo",
  authDomain: "todoler-mvc-44add.firebaseapp.com",
  databaseURL: "https://todoler-mvc-44add.firebaseio.com",
  projectId: "todoler-mvc",
  storageBucket: "",
  messagingSenderId: "769487962734",
  appId: "1:769487962734:web:7f23922b4f02d3c1"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
