import firebase from 'firebase/compat/app';
import "firebase/database"

var firebaseConfig = {
    apiKey: "AIzaSyA6GugdpR6nHlgTYf50LFJce6FIyYvffyk",
    authDomain: "dormit-f30f6.firebaseapp.com",
    databaseURL: "https://dormit-f30f6-default-rtdb.firebaseio.com",
    projectId: "dormit-f30f6",
    storageBucket: "dormit-f30f6.appspot.com",
    messagingSenderId: "878541835926",
    appId: "1:878541835926:web:4f07ec7742de34bf423cb7",
}

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref()
export const loginRef = databaseRef.child("information")
export default firebase