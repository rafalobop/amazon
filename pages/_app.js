import { useEffect, useState } from 'react'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: {session, ...pageProps} }) {

  const [ showChild, setShowChild ] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if(!showChild){
    return null
  }

  if(typeof window === 'undefined'){
    return <></>;
  } else {
    return (
      <SessionProvider session={session}>
        <Provider store={store}>      
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    )
  }
}
