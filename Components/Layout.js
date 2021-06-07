import TopHeader from './nav/TopNav'
import Testimonials from './testimonials/Testimonials'
import PricingTiers from './pricingTiers/PricingTiers'
import Footer from './footer/Footer'
import CallToAction from './CallToAction'
import Features from './Feature'
import Steps from './Steps'

const Layout = ({ children }) => {
   return (
       <>
        <TopHeader />

        <Features />

        <Steps />

        <PricingTiers />

        <Testimonials />

        <CallToAction />

        <Footer />

       </>
   )
}

export default Layout