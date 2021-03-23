import '../styles/index.css'
import 'tailwindcss/tailwind.css'
import initAuth from '../initAuth'

initAuth()

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Component {...pageProps} />
  </div>)
}

export default MyApp
