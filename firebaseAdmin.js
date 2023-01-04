import admin from 'firebase-admin'
import permissions from './permissions.json'

export const verifyToken = async token => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(permissions)
        })
    }
    return await admin.auth().verifyIdToken(token)
}