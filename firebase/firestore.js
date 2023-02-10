import { collection, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore"
import { firestore } from "./firebase-setup"

export async function addEntriesFunction(data) {
    console.log("data test calories", data.calories);
    const caloriesInt = parseInt(data.calories);
    
    if (caloriesInt >= 500) {
        data.isWarning = true;
    } else {
        data.isWarning = false;
    }
    
    try {
      await addDoc(collection(firestore, "entries"), data);
    } catch (err) {
      console.log(err);
    }
  }