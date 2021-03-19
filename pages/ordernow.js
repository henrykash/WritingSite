import React from 'react'
import TopNav from '../Components/TopNav'
import PricingTiers from '../Components/PricingTiers'
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