import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import { addToBasket } from '../redux/basketSlice';
import { useDispatch } from 'react-redux';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ product }) {

    const dispatch = useDispatch()

    const [ rating ] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
    const [ hasPrime ] = useState(Math.random() < 0.5)
    
    const addItemToBasket = () => {
        dispatch(addToBasket(product))
    }

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{product.category}</p>

            <Image 
                src={product.image}
                height={200}
                width={200}
                style={{objectFit: "contain", width: 'auto', height:'auto'}}
                alt="7"
                priority
            />

            <h4 className='my-3'>{product.title}</h4>

            <div className='flex'>   
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500' key={i} />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{product.description}</p>
            <div className='mb-5'>
                <p>USD ${product.price}</p>
            </div>

            { hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img src="https://links.papareact.com/fdw" alt="5" className='w-12' />
                    <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
                </div>
            )}

            <button onClick={addItemToBasket} className='mt-auto button'>Add to Cart</button>

        </div>
    )
}

export default Product