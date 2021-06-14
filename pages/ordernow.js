import React from 'react'
import PlaceOrder from '../Components/ordernow/PlaceOrder'
import ComputePrice from '../Components/ordernow/ComputePrice'
import CheckoutAuth from '../Components/ordernow/CheckoutAuth'
import Footer from '../Components/footer/Footer'

const orderNow = () => {
    return (
        <>
            <main>
                <PlaceOrder />

                <ComputePrice />

                <CheckoutAuth />
            </main>
            <Footer />
        </>
    )
}

export default orderNow