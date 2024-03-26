// firestore CRUD https://www.youtube.com/watch?v=uikATllLdRc

import {collection, addDoc, onSnapshot, query, doc, deleteDoc, updateDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig'

// Add item to database
export const addItem = async (stateData: {[key:string]:any}) => {
    await addDoc(collection(db, 'items'), stateData)
}
    

// Read items from database
export const readItems = (setter: Function) => {
    const q = query(collection(db, 'items'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const itemsArr:any[] = []
        querySnapshot.forEach((doc) => {
            itemsArr.push({...doc.data(), id: doc.id})
        })
        setter([...itemsArr])     
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

// Modify item in database
export const modifyItem = async (id: string, stateData: {[key:string]:any}) => {
    try {
        const docRef = doc(db, 'items', id)
        await updateDoc(docRef, stateData)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}