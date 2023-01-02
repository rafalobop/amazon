import React from 'react'
import Product from './Product'

const ProductFeed = ({ products }) => {

  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {products.slice(0, 4).map((prod) => (
        <Product 
          product={prod}
          key={prod.id}
          /* id={prod.id}
          price={prod.price}
          description={prod.description}
          category={prod.category}
          image={prod.image} */
        />
      ))}

      <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="6" />
        
      <div className='md:col-span-1'>
        {products.slice(4,5).map((prod) => (
          <Product 
            product={prod}
            key={prod.id}
            /* id={prod.id}
            price={prod.price}
            description={prod.description}
            category={prod.category}
            image={prod.image} */
          />
        ))}
      </div>

          
      {products.slice(5, products.length).map((prod) => (
          <Product 
            product={prod}
            key={prod.id}
            /* id={prod.id}
            price={prod.price}
            description={prod.description}
            category={prod.category}
            image={prod.image} */
          />
        ))}
    </div>
  )
}

export default ProductFeed