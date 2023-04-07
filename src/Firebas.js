import firebase from 'firebase/compat/app';
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyD9F5sk3TUX2Izm53vWMWHHUDEgTvrClHU",
  authDomain: "decapp-wallet-1718a.firebaseapp.com",
  projectId: "decapp-wallet-1718a",
  storageBucket: "decapp-wallet-1718a.appspot.com",
  messagingSenderId: "434148340954",
  appId: "1:434148340954:web:2b45a77765911bdfaa61e3"
};


const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref();
