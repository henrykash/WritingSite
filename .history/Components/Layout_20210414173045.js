import TopNav from './nav/TopNav'
import Header from './header/Header'
import Testimonials from './testimonials/Testimonials'
import Steps from './Steps'
import PricingTiers from './pricingTiers/PricingTiers'
import Footer from './footer/Footer'
import CallToAction from './CallToAction'
import Features from './'

const Layout = ({ children }) => {
   return (
       <>
        <TopNav />

        <Header />

        < Steps />

        <PricingTiers />

        <Testimonials />

        <CallToAction />

        <Footer />

       </>
   )
}

export default Layout