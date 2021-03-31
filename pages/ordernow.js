import React from 'react'
import TopNav from '../Components/nav/TopNav'
import PricingTiers from '../Components/pricingTiers/PricingTiers'
import Footer from '../Components/Footer'

const orderNow = () => {
    return (
        <div>
            <TopNav />
            <PricingTiers />
            <hr />
            <Footer />
        </div>
    )
}

export default orderNow