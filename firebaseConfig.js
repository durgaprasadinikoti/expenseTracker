import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAkMcJYKesnZap51pl9S9nTIgBMezp_4ng",
    authDomain: "expenses-f2237.firebaseapp.com",
    projectId: "expenses-f2237",
    storageBucket: "expenses-f2237.appspot.com",
    messagingSenderId: "625006769520",
    appId: "1:625006769520:web:2bf69c52ef410e1fc5cbb5",
    measurementId: "G-FDCPVDGHTH",
    databaseURL: "https://expenses-f2237-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { app, database };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
