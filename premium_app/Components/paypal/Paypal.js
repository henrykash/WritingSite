import {useRef, useEffect} from 'react'

export default function Paypal (){
    const paypal = useRef();

    //writing out an effective function that displays after every Paypal page render
    useEffect(()=> {
        window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Cool looking table",
                  amount: {
                    currency_code: "CAD",
                    value: 650.0,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current); }, [])

        console.log("I'm fucked up")
    return(
        <>
        <div ref={paypal}></div>
        </>
    );
}