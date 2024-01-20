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

async function editList (listName, array) {
    try {
    const q = query(listCollection, where("name", "==", listName))
    const querySnapshot = await getDocs(q)
    console.log(querySnapshot)
    let listDoc = querySnapshot.docs[0]

    await updateDoc(listDoc.ref, {
      products: array
    })
    return 200
  } catch (error) {
    console.error(error);
  }
}

async function deleteList(list) {
  try {
    const q = query(listCollection, where("name", "==", list));

    const querySnapshot = await getDocs(q);
    let listDoc = querySnapshot.docs[0];

    await deleteDoc(listDoc.ref);
    return 200;
  } catch (error) {
    console.error(error);
  }
}

export {
  getAllLists,
  createList,
  editList,
  deleteList
}