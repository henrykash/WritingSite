import Link from 'next/link';

//implement auth during checkout - checkout should only work when auth is okay
//Price-calculate floating component

const CheckoutButton = () => {
    return (
        <>
        <main>
            <div>
                <Link href="/">
                    <button type="submit" className="bg-gray-500 hover:underline">Proceed to Checkout</button>
                </Link>
            </div>
        </main>
        </>
    )
}

export default CheckoutButton