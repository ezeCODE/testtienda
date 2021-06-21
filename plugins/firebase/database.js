import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import connect from "./config.js"
 
!firebase.apps.length ? firebase.initializeApp(connect) : ''

const db = firebase.firestore()
   
const storeageRef  = firebase.storage().ref()
const arrayTask =  firebase.firestore.FieldValue
 
const logins = firebase.auth()
const logins2 = firebase.auth().currentUser

const fireBatch = firebase.firestore().batch()

const counterADD = firebase.firestore.FieldValue.increment(1);
const counterSUB = firebase.firestore.FieldValue.increment(-1);
export { counterADD , counterSUB }

export  { db , logins , storeageRef, logins2 , fireBatch , arrayTask}
