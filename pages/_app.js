import '../styles/index.css'
import 'tailwindcss/tailwind.css'
//import { AuthProvider } from '@/lib/auth';


function MyApp({ Component, pageProps }) {
  return (
  <div>
      <Component {...pageProps} />
  </div>);
}

export default MyApp
