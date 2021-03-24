//taking care of the cyrpting - objectives-> authenticating users in the app
const admin = require('firebase-admin');
const serviceAccount = require('./secretAccount.json');

export const verifyIdToken = (token) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        })
    }
    return admin
    .auth()
    .verifyIdToken(token) //this is the JWT token
    .catch((error) =>{
        throw error;
    }
    )
}