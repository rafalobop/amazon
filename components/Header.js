import Image from 'next/image'
import React from 'react'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../redux/basketSlice'


function Header() {

    const session = useSession() 
    const router = useRouter()
    const items = useSelector(selectItems)
    
    return (
        <header>
            <div className='flex items-center p-5 flex-grow py-2 bg-[#16191E]'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image 
                        onClick={() => router.push('/')}
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        width={150}
                        height={50}
                        style={{objectFit: "contain", width: 'auto', height:'auto'}}
                        className="cursor-pointer"
                        alt="1"
                    />
                </div>
                <div className='ml-10 bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div onClick={!session.data ? signIn : signOut} className='cursor-pointer link'>
                        <p>{session.data ? `Hello, ${session.data.user.name}` : "Sign In"}</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>
                    <div onClick={() => session && router.push('/orders')} className='cursor-pointer link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>Orders</p>
                    </div>
                    <div className='relative link flex items-center' onClick={() => router.push('/checkout')}>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full flex justify-center text-black items-center'>{items.length}</span>
                        <ShoppingCartIcon className='h-10'/>
                        <p className='hidden md:inline font-extrabold md:text-sm mt-4'>Cart</p>    
                    </div>
                </div>
            </div>
            <div className='flex items-center space-x-3 p-2 pl-6 bg-[#16191E] text-white text-sm'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1'/>All
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>

        </header>
    )
}

export default Header