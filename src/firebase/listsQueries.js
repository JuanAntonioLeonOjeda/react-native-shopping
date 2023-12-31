import {
  collection,
  getDocs,
  query,
  addDoc,
  orderBy,
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore"
import db from "./config"

const listCollection = collection(db, "lists")

async function getAllLists() {
  try {
    const q = query(listCollection, orderBy("name"));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map((doc) => doc.data());
    return result;
  } catch (error) {
    console.error(error)
  }
}

async function createList (data) {
  try {
    const docRef = await addDoc(listCollection , {
      name: data.name,
      products: data.products
    })
  } catch (error) {
    console.error(error);
  }
}

export {
  getAllLists,
  createList
}