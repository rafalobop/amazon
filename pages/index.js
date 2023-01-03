import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'
import { getSession } from 'next-auth/react'


export default function Home({ products }) {

    return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon | From A to Z</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/amazon_icon.ico" />
      </Head>
      
      <Header />
      
      <main className='mx-auto w-full'>
        <Banner />

        <ProductFeed products={products}/>
      </main>      
    </div>
  )
}

export const getServerSideProps = async (context) => {
  
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()
  const session = await getSession()

  return {
    props: {
      products,
      session
    }
  }
}
