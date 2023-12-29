import { collection, getDocs, query, addDoc, orderBy, updateDoc, deleteDoc, where } from "firebase/firestore"
import db from "./config"

const products = collection(db, "products")

async function getAllProducts() {
  try {
    const q = query(products, orderBy('name'))
    const querySnapshot = await getDocs(q)
    const result = querySnapshot.docs.map((doc) => doc.data())
    return result
  } catch (error) {
    console.error(error)
  }
}

async function addProduct(data) {
  try {
    const docRef = await addDoc(products, {
      name: data.name
    })
  } catch (error) {
    console.error(error);
  }
}

async function editProduct(productName, input) {
  try {
    const q = query(products, where("name", "==", productName))

    const querySnapshot = await getDocs(q)
    let productDoc = querySnapshot.docs[0]

    await updateDoc(productDoc.ref, {
      name: input
    })
    return 200
  } catch (error) {
    console.error(error);
  }
}

async function deleteProduct(product) {
  try {
    const q = query(products, where("name", "==", product))

    const querySnapshot = await getDocs(q)
    let productDoc = querySnapshot.docs[0]

    await deleteDoc(productDoc.ref)
    return 200;
  } catch (error) {
    console.error(error);
  }
}

export { 
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct
}
