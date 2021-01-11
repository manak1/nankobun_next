import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Form from "../@types/form"


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
    ...form
  })
  const docId = result.id
  return docId;
}

export async function getShindan(docId: string): Promise<Form> {
  const shindan = await firebase.firestore().collection('shindan').doc(docId).get()
  return shindan.data() as Form

}
