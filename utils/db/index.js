import admin from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

if (!admin.apps.length) {
    try{
        adimin.initializeApp({
            credentials: admin.credentials.cert(serviceAccount),
            databaseURL: ""
        })
    } catch (e) {
        console.log('Firebase admin initialization error', error.stack);
    }
}

export default admin.firestore();