// firestore CRUD https://www.youtube.com/watch?v=uikATllLdRc

import {collection, addDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig'

// Add item to database
export const addItem = async (stateData: {[key:string]:any}) => {
    await addDoc(collection(db, 'items'), stateData)
}
    

// Read items from database



// Delete item from database