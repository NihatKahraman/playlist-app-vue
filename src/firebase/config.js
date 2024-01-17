import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCxABrtP76SY88ZnC0UbysamQG7rHxWTr4",
    authDomain: "playlist-vue-3126a.firebaseapp.com",
    projectId: "playlist-vue-3126a",
    storageBucket: "playlist-vue-3126a.appspot.com",
    messagingSenderId: "28152557512",
    appId: "1:28152557512:web:8e907d2690b5dfe58f1afd"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()


const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}