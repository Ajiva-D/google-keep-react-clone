import firebase from 'firebase';
const firebaseConfig = {
	apiKey: "AIzaSyCYWJrG6ih_b0zzE0L6940kO9dfghEJ76g",
	authDomain: "keep-react-clone.firebaseapp.com",
	databaseURL: "https://keep-react-clone.firebaseio.com",
	projectId: "keep-react-clone",
	storageBucket: "keep-react-clone.appspot.com",
	messagingSenderId: "452663224093",
	appId: "1:452663224093:web:6749405ca90b663600e3f4",
	measurementId: "G-LTV569ZHL9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase