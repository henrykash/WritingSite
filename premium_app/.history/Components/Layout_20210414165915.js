import TopNav from './nav/TopNav'
import Header from './header/Header'
import Testimonials from './testimonials/Testimonials'
import Steps from './Steps'

const Layout = ({ children }) => {
   return (
       <>
        <TopNav />

        <Header />

        <Testimonials />

        <Steps />

       </>
   )
}

export default Layout