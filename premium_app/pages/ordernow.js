import React from 'react'
import PlaceOrder from '../Components/ordernow/PlaceOrder'
import ComputePrice from '../Components/ordernow/ComputePrice'
import CheckoutButton from '../Components/ordernow/CheckoutButton'
import Footer from '../Components/footer/Footer'
import FloatingCalcTool from '../Components/ordernow/FloatingCalcTool'

const orderNow = () => {
    return (
        <>
            <main>
                <PlaceOrder />

                <ComputePrice />

                <FloatingCalcTool />

                <CheckoutButton />

            </main>
            <Footer />
        </>
    )
}

export default orderNow