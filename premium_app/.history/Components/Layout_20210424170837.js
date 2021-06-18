import TopNav from './nav/TopNav'
import Header from './header/Header'
import Testimonials from './testimonials/Testimonials'
import PricingTiers from './pricingTiers/PricingTiers'
import Footer from './footer/Footer'
import CallToAction from './CallToAction'
import Features from './Feature'
imp

const Layout = ({ children }) => {
   return (
       <>
        <TopNav />

        <Header />

        <Features />

        <PricingTiers />

        <Testimonials />

        <CallToAction />

        <Footer />

       </>
   )
}

export default Layout