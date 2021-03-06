import Link from 'next/link';
import {useEffect} from 'react'

const ComputePrice = () => {
    useEffect(()=> {
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
}, [])
    return(
        <>
        <main className="grid justify-items-center">
        <h2>2. Pricing Details</h2>
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
            h2{
                border: 2px solid #538395;
            }
           `}
        </style>
        {/**The number of pages should initiate a dynamic change in the floating calc Tool*/}
            <label>Input your number of pages:</label>
            <div className="py-7" id="PageNumbers">
                <button id="minus">−</button>
                <input value="0" id="input" className="text-center"/>
                <button id="plus">+</button>
            </div>

            <label>Word Spacing:</label>
            <div className="flex flex-row" >
                <input type="radio" className="hover:bg-gray-500" value="double-spaced" name="Paper format"/>Double-spaced
                <input type="radio" className="hover:bg-gray-500" value="single-spaced" name="Paper format"/>Single-spaced
            </div>

            <label>Currency:</label>
            <div className="flex flex-row" >
                <input type="radio" className="hover:bg-gray-500" value="USD" name="currency"/>USD

                <input type="radio" className="hover:bg-gray-500" value="Euro" name="currency"/>Euro

                <input type="radio" className="hover:bg-gray-500" value="KSH" name="currency"/>KSH

            </div>

            <label>Set deadline:</label>
                <div>
                <input type="datetime-local" id="meeting-time" name="meeting-time" className="border border-gray-500" />
                </div>

                {/**Each level of proficiency gets to have the relative standard price*/}
            <label>Select Writer's Proficiency:</label>
            <div className="flex flex-row">
                <div>
                    <label>
                        <input type="radio" name="orderquality" value="1#Standard" />
                        <h6> Standard </h6><hr />
                        <small className="border-r-2 border-fuchsia-600"> Standard Price writers</small>
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