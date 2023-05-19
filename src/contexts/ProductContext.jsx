import { createContext, useState } from "react";
import { useParams } from 'react-router-dom'

// export const ProductContext = createContext()

// const ProductContextProvider = ({ children }) => {
    
//     const [product, setProduct] = useState(null)
//   const { id } = useParams();

//   useEffect(() => {
//     const getProduct = async () => {
//       const res = await fetch('http://localhost:9999/api/product/' + id)
//       const data = await res.json()
//       console.log(data)
//       setProduct(data)

//       value = product
//     }
//     getProduct()
//   }, [])

  
//   return (
//       <ProductContextProvider value={value} >
//           {children}
//       </ProductContextProvider>
//   )

// }


// export default ProductContextProvider