import React from 'react'
import Header from '../components/Header'
import CheckoutProduct from '../components/CheckoutProduct'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../redux/basketSlice'
import { useSession } from 'next-auth/react'

const checkout = () => {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const { session }  = useSession()
    


    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-lg mx-auto'>
                <div className='flex-grow m-5 shadow-sm'>
                    <Image 
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        style={{objectFit: "contain"}}
                    />

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h2 className='text-3xl border-b pb-4 text-center'>
                            {items.length === 0 ? "Your Cart is empty." : "Items in your cart"}
                        </h2>
                        { items.map((item, i) => (
                            <CheckoutProduct key={i} item={item}/>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col bg-white p-10 shadow-md'>
                    { items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items): 
                                <span className='font-bold'>USD ${total}</span>
                            </h2>

                            <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>{!session ? "Sign in to checkout" : "Proceed to checkout"}</button>

                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default checkout