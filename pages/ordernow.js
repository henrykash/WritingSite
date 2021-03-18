import React from 'react'
import TopNav from '../Components/TopNav'
import PricingTiers from '../Components/PricingTiers'
import Checkout from '../Components/Checkout'
import Footer from '../Components/Footer'

const orderNow = () => {
    return (
        <div>
            <TopNav />
            <PricingTiers />
            <Checkout />
            <Footer />
        </div>
    )
}

export default orderNow