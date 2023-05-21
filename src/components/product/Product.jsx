import './product.scss'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/productDetails/${product.id}`}>
        <div className='productGridTitleContainer'>
        <h2>{product.title}</h2>
        </div>
        <img className='productGridImage' src={product.imageURL[0]} alt="Product image"/>
      </Link>
    </div>
  )
}

export default Product