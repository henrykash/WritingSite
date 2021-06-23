import { PayPalButtons } from "@paypal/react-paypal-js";
import {useState} from 'react';

//implement auth during checkout - checkout should only work when auth is okay
//Price-calculate floating component

const CheckoutButton = () => {

    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [billingDetails, setBillingDetails] = useState("");

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
          const {payer} = details;
          setBillingDetails(payer);
          setSucceeded(true);
        }).catch(err=> setPaypalErrorMessage("Something went wrong."));
      };

      const createOrder = (data, actions, orderCost) => {
          orderCost = ''; //trying to fetch the total checkout value
            return actions.order
            .create({
                purchase_units: [
                {
                    amount: {
                    // The need to implement the relative amount value for the whole checkout
                    value: {orderCost},
                    },
                },
                ],
                
                application_context: {
                shipping_preference: "NO_SHIPPING",
                },
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
      };

    return (
        <>
            <main>
                <PayPalButtons
                    style={{
                        color: "silver",
                        shape: "pill",
                        label: "paypal",
                        tagline: false,
                        layout: "vertical",
                        size: "small"
                    }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    className="align-center ml-96"
                />
            </main>
        </>
    )
}

export default CheckoutButton