import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPWcOoh_ZtbTPsLTTo_ScVV_fIkH7IFLQ",
  authDomain: "mealstogo-47138.firebaseapp.com",
  projectId: "mealstogo-47138",
  storageBucket: "mealstogo-47138.appspot.com",
  messagingSenderId: "852128615350",
  appId: "1:852128615350:web:742e0675f63d911eaa8f17",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
