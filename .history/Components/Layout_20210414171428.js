import TopNav from './nav/TopNav'
import Header from './header/Header'
import Testimonials from './testimonials/Testimonials'
import Steps from './Steps'
import PricingTiers from './pricingTiers/PricingTiers'
import Footer from './footer/Footer'
import CallToAction from './CallToAction'

const Layout = ({ children }) => {
   return (
       <>
        <TopNav />

        <Header />

        < Steps />

        <PricingTiers />

        <Testimonials />

        <Footer />

       </>
   )
}

export default Layout