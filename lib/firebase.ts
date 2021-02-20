import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Form from "../@types/form"

export interface FirebaseData  {
  name: string,
  emoji: {
    id: string,
    native: string
  }
  author: string,
  height: number,
  unit: string,
  id?: string,
  randomType: number
}


if (firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  }
  firebase.initializeApp(firebaseConfig)
}


export async function createShindan(form: Form): Promise<string> {
  const shindan = firebase.firestore().collection('shindan')
  const result = await shindan.add({
    ...form,
    randomType: Math.round(Math.random()*5)
  })
  const docId = result.id
  return docId;
}

export async function getShindan(docId: string): Promise<FirebaseData> {
  const shindan = await firebase.firestore().collection('shindan').doc(docId).get()
  if(shindan) {
    return shindan.data() as FirebaseData
  }

  return 
}

export async function getLatest(): Promise<FirebaseData[]> {
  const snapShot = await firebase.firestore().collection('shindan').limit(5).get()
  if(snapShot) {
    const shindanList = snapShot.docs.map(m => {
      return {
        ...m.data(),
        id: m.id
      } as FirebaseData
    })
    return shindanList
  }
  return 
}


export async function getOther(randomType: number): Promise<FirebaseData[]> {
  const snapShot = await firebase.firestore().collection('shindan').where('randomType','==',randomType).limit(3).get()
  if(snapShot) {
    const shindanList = snapShot.docs.map(m=>{
      return {
        ...m.data(),
        id: m.id
      }  as FirebaseData
    })
    return shindanList
  }
}