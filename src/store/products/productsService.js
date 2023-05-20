import { db } from "../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'

const createProduct = async (productData) => {
  const collectionRef = collection(db, 'products')
  const docRef = await addDoc(collectionRef, productData)

  if(!docRef.id) throw new Error('Something went wrong')

  console.log(docRef)
  return {id: docRef.id, ...productData}

}

const getAllAsync = async (col) => {
  const colRef = collection(db, col)
  const querySnapshot = await getDocs(colRef)

  const products = []
  querySnapshot.forEach(doc => {
    products.push({id: doc.id, ...doc.data()})
  })

  return products
}

// const getAsync = async (col, id) => {
//   const docRef = doc(db, col, id)
//   const docSnapshot = await getDoc(docRef)
//   return { id: docSnapshot.id, ...docSnapshot.data() }
// }

const productsService = {
  createProduct,
  getAllAsync
}

export default productsService


// const getAllAsync = async () => {
//   const res = await fetch('http://localhost:9999/api/product')
//   if(!res.ok) throw new Error('Something went wrong')
//   return res.json()
// }

// const getByIdAsync = async (id) => {
//   const res = await fetch('http://localhost:9999/api/product/' + id)
//   console.log(id)
//   if(!res.ok) throw new Error('Something went wrong')
//   return res.json()
// }





// const productsService = {
//   getAllAsync,
//   getByIdAsync
// }

// export default productsService