import './product.scss'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className='product'>
      <Link to={`/productDetails/${product.id}`}>
        <h2>{product.title}</h2>
        <img className='productGridImage' src={product.imageURL[0]} alt="Product image"/>
        {/* <p>{product.body.slice(0,40)}...</p> */}
      </Link>
    </div>
  )
}

export default Product