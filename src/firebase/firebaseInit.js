import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyCJbnY4SkrKlNdkLdrmW9tORlPfeeBpXSg",
	authDomain: "invoice-app-yt-931bb.firebaseapp.com",
	projectId: "invoice-app-yt-931bb",
	storageBucket: "invoice-app-yt-931bb.appspot.com",
	messagingSenderId: "1030053177673",
	appId: "1:1030053177673:web:f5089f327f14d1c20e5298",
};

const firebaseApp = firebase.initialize(firebaseConfig);

export default firebaseApp.firestore();
