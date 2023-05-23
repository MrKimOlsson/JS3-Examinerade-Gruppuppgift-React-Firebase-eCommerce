import React, { forwardRef } from 'react'
import './carousell.scss'

const Carousell = forwardRef(({products}, ref) => {

  return (
    <div className='carousellContainer' ref={ref}>
      {products && products.map((product) => (
      <div className='carousellProduct' key={product.id}>
        <img src={product.imageURL[0]} className='carousellimg' alt="" />
          <div className='carousellText'>
          <div className='carousellTitle'>
            <p>{product.title}</p>
          </div>
        {/* <p>{product.price}</p> */}
      </div>
    </div>
))}
  </div>
)

}
)
export default Carousell
