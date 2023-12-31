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

async function createList () {
  try {
    
  } catch (error) {
    console.error(error);
  }
}

export {
  createList
}