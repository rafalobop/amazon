import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../redux/basketSlice'

const CheckoutProduct = ({ item }) => {

  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket(item))
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket( item ))

  }

  return (
    <div className='grid grid-cols-5'>
      <Image 
        src={item.image}
        height={200}
        width={200}
        style={{objectFit:"contain"}}
        alt="9"
      />
      <div className='col-span-3 mx-5'>
        <p>{item.title}</p>
        <div className='flex'>
          {Array(item.rating).fill().map((_, i)=> (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{item.description}</p>
        <p>USD ${item.price}</p>
            
        { item.hasPrime && (
          <div className='flex items-center space-x-2'>
            <img src="https://links.papareact.com/fdw" alt="8" className='w-12' />
            <p className='text-xs text-gray-500'>FREE Next day Delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addItemToBasket} className='button'>Add to Cart</button>
        <button onClick={removeItemFromBasket} className='button'>Remove from Cart</button>
      </div>


    </div>
  )
}

export default CheckoutProduct