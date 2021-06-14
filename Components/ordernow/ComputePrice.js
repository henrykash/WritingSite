import Link from 'next/link';

const ComputePrice = () => {
    if(typeof window !== 'undefined'){
        window.onload = function (){
        const minusButton = document.getElementById('minus');
        const plusButton = document.getElementById('plus');
        const inputField = document.getElementById('input');

        minusButton.addEventListener('click', event => {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue - 1;
        });

        plusButton.addEventListener('click', event => {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue + 1;
        });
    }
    }
    return(
        <>
        <main>
        <style jsx>
            {`
            button{
                border: 1px solid #ced4da !important;
                font-size: 14px !important;
                width: 100%;
                padding: 0px 10px;
                cursor: pointer;
                min-height: 1px;
                z-index: 1;
                font-weight: bold;
                line-height: 1.5;
                white-space: nowrap;
                border-radius: 5px;
                width: fit-content;
            }
           `}
        </style>
        <h2 className="underline">Pricing Details</h2>
            <label>Input your number of pages:</label>
            <div className="py-7">
                <button id="minus">−</button>
                <input type="number" value="0" id="input" className="text-center"/>
                <button id="plus">+</button>
            </div>

            <label>Word Spacing:</label>
            <div className="flex flex-row" >
                <Link href="/">
                    <button value="submit" className="hover:bg-gray-500">Double Spaced</button>
                </Link>

                <Link href="/">
                    <button value="submit" className="hover:bg-gray-500" selected>Single Spaced</button>
                </Link>
            </div>

            <label>Currency:</label>
            <div className="flex flex-row" >
                <Link href="/">
                    <button value="submit" className="hover:bg-gray-500">USD</button>
                </Link>

                <Link href="/">
                    <button value="submit" className="hover:bg-gray-500" selected>EURO</button>
                </Link>

                <Link href="/">
                    <button value="submit" className="hover:bg-gray-500" selected>GBP</button>
                </Link>

                <Link href="/">
                    <button value="submit" className="hover:bg-gray-500" selected>KSH</button>
                </Link>

            </div>

            <label>Set deadline:</label>
                <div>
                    <label>
                    <input type="radio" value="" name="order_deadline" />3 Hours
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />6 Hours
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />12 Hours
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />24 Hours
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />48 Hours
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />3 Days
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />4 Days
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />7 Days
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />11 Days
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />14 Days
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />21 Days
                    </label>
                    <label>
                    <input type="radio" value="" name="order_deadline" />30 Days
                    </label>
                </div>

            <label>Select Writer's Proficiency:</label>
            <div className="flex flex-row">
                <div>
                    <label>
                        <input type="radio" name="orderquality" value="1#Standard"/>
                        <h6> Standard </h6><hr />
                        <small> Standard Price writers</small>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="orderquality" value="2#Premium"/>
                        <h6> Premium </h6><hr />
                        <small> High-rank writer,<br /> proficient in <br /> the requested <br />field of study</small>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="orderquality" value="3#Platinum"/>
                        <h6> Platinum </h6><hr />
                        <small> English as a native <br /> language writer <br />(US, UK, CA, AU writers)<br /> </small>
                    </label>
                </div>
            </div>
        </main>
        <hr className="border-red-100"/>
        </>
    )
}

export default ComputePrice