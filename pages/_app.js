import '../styles/index.css'
import 'tailwindcss/tailwind.css'
import {AuthProvider} from '../auth'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>
  </div>);
}

export default MyApp
