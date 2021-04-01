import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from '../seed'; -> seed file to populate firebase firestore

//need to somehow seed the database

//need a config here
const config = {
  apiKey: "AIzaSyC0aE_9eVt3xNH-CaokfX-wvMgCyhSDJSg",
  authDomain: "netflix-web-2eeb6.firebaseapp.com",
  projectId: "netflix-web-2eeb6",
  storageBucket: "netflix-web-2eeb6.appspot.com",
  messagingSenderId: "167298736511",
  appId: "1:167298736511:web:ad4f6475023e265fbcba4a",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase); -> calling the seed function 

export { firebase };
