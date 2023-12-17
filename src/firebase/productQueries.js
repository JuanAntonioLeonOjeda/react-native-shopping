import { collection, getDocs, query, addDoc } from "firebase/firestore"
import db from "./config"

const products = collection(db, "products")

async function getAllProducts() {
  try {
    const q = query(products)
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

export { 
  getAllProducts,
  addProduct
}
