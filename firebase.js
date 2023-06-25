import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8bqZXeh6JMxkFnb5b18N7c-3Xu9C8jQM",
  authDomain: "otaku-love-96ab3.firebaseapp.com",
  projectId: "otaku-love-96ab3",
  storageBucket: "otaku-love-96ab3.appspot.com",
  messagingSenderId: "680561497801",
  appId: "1:680561497801:web:71350f39e277493ae59f18"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }