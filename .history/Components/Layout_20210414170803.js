import TopNav from './nav/TopNav'
import Header from './header/Header'
import Testimonials from './testimonials/Testimonials'
import Steps from './Steps'
import PricingTiers from './pricingTiers/PricingTiers'

const Layout = ({ children }) => {
   return (
       <>
        <TopNav />

        <Header />

        < Steps />

        <>

        <Testimonials />

        

       </>
   )
}

export default Layout