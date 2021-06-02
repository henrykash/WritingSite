import '../styles/index.css'
import 'tailwindcss/tailwind.css'
import {Provider} from 'next-auth/client'


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}> {/**session gets to passed in all the relative pages*/}
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
