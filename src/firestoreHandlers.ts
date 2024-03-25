// firestore CRUD https://www.youtube.com/watch?v=uikATllLdRc

import {collection, addDoc, onSnapshot, query, doc, deleteDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig'

// Add item to database
export const addItem = async (stateData: {[key:string]:any}) => {
    await addDoc(collection(db, 'items'), stateData)
}
    

// Read items from database
export const readItems = () => {
    const q = query(collection(db, 'items'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const itemsArr = []
        querySnapshot.forEach((doc) => {
            itemsArr.push({...doc.data(), id: doc.id})
        })
    })
    return unsubscribe
    // if this works as I expect use in useEffect as const unsubscribe = readItems() and return () => unsubscribe()
}


// Delete item from database
export const deleteItem = async (id: string): Promise<boolean> => {
    try {
        const docRef = doc(db, 'items', id)
        await deleteDoc(docRef)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}