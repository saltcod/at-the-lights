import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDQzoCu3c9P-J-9z3CvbhN1t1f5rmE1_Fw",
	authDomain: "at-the-lights.firebaseapp.com",
	databaseURL: "https://at-the-lights.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
