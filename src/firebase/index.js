import firebase from 'firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDkeJUlYkmVkT6U3lC9WpgdnICM7lSFYKo",
    authDomain: "rohe-store.firebaseapp.com",
    projectId: "rohe-store",
    storageBucket: "rohe-store.appspot.com",
    messagingSenderId: "385247012160",
    appId: "1:385247012160:web:af4192be878038e37e46a5"
  });

export function getFirebase(){
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}