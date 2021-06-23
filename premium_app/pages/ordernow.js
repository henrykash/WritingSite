import React from 'react'
//import PlaceOrder from '../Components/ordernow/PlaceOrder'
//import ComputePrice from '../Components/ordernow/ComputePrice'
import CheckoutButton from '../Components/ordernow/CheckoutButton'
import Footer from '../Components/footer/Footer'
//import FloatingCalcTool from '../Components/ordernow/FloatingCalcTool'
import {useEffect} from 'react'

const orderNow = () => {
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

    //outputting the relative selected radio elements
    function showCheckout(){
        document.getElementById("result").innerHTML = "";
            var ele = document.getElementsByTagName('input');
            let i = 0;
            for(i = 0; i < ele.length; i++) {
                  
                if(ele[i].type="radio") {
                  
                    if(ele[i].checked)
                        document.getElementById("result").innerHTML
                                += ele[i].name + " Value: "
                                + ele[i].value + "<br>";
                }
            }
    }

    return (
        <>
            <main className="leading-10 shadow-lg" onInput={showCheckout}>

                {/*<PlaceOrder />*/}
                <form className="grid justify-items-center">
                    <h2>1. Place Order</h2>
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

                    <div className="flex flex-col">
                        <label>Academic level:</label>
                        <div className="flex flex-row" id="AcademicLevel">
                            <input type="radio" className="hover:bg-gray-500" value="High School" name="Academic Level" />High School

                            <input type="radio" className="hover:bg-gray-500" value="Undergraduate" name="Academic Level" />Undergraduate

                            <input type="radio" className="hover:bg-gray-500" value="Masters" name="Academic Level" />Masters

                            <input type="radio" className="hover:bg-gray-500" value="PhD" name="Academic Level"/>PhD
                        </div>

                        <label>Type of paper: </label>
                            <div id="PaperType">
                                <select name="Type of paper" id="Paper Types">
                                    <option value="1#Article (Any Type)">Article (Any Type)</option>
                                    <option value="1#Assignment">Assignment</option>
                                    <option value="1#Content (Any Type)">Content (Any Type)</option>
                                    <option value="1#Admission Essay">Admission Essay</option>
                                    <option value="1#Annotated Bibliography">Annotated Bibliography</option>
                                    <option value="1#Argumentative Essay">Argumentative Essay</option>
                                    <option value="1#Article Review">Article Review</option>
                                    <option value="1#Book/Movie Review">Book/Movie Review</option>
                                    <option value="1#Business Plan">Business Plan</option>
                                    <option value="1#Capstone Project">Capstone Project</option>
                                    <option value="1#Case Study">Case Study</option>
                                    <option value="1#Coursework">Coursework</option>
                                    <option value="1#Creative Writing">Creative Writing</option>
                                    <option value="1#Critical Thinking">Critical Thinking</option>
                                    <option value="1#Dissertation">Dissertation</option>
                                    <option value="1#Dissertation chapter">Dissertation chapter</option>
                                    <option value="1#Lab Report">Lab Report</option>
                                    <option value="1#Math Problem">Math Problem</option>
                                    <option value="1#Research Paper">Research Paper</option>
                                    <option value="1#Research Proposal">Research Proposal</option>
                                    <option value="1#Research Summary">Research Summary</option>
                                    <option value="1#Scholarship Essay">Scholarship Essay</option>
                                    <option value="1#Speech">Speech</option>
                                    <option value="1#Statistic Project">Statistic Project</option>
                                    <option value="1#Term Paper">Term Paper</option>
                                    <option value="1#Thesis/Thesis Chapter">Thesis/Thesis Chapter</option>
                                    <option value="1#Other">Other</option>
                                    <option value="1#Presentation or Speech">Presentation or Speech</option>
                                    <option value="1#Q&amp;A">Q&amp;A</option>
                                    <option value="1#speech work">speech work</option>
                                    <option value="1#Application Paper">Application Paper</option>
                                    <option value="1#Analysis">Analysis</option>
                                    <option value="1#Memo/Letter">Memo/Letter</option>
                                    <option value="0.5#Outline">Outline</option>
                                    <option value="1#Personal reflection">Personal reflection</option>
                                    <option value="0.7#Presentation/PPT">Presentation/PPT</option>
                                    <option value="1#Report (Any type)">Report (Any type)</option>
                                    <option value="1#Response Essay">Response Essay</option>
                                    <option value="1#Acceptance letter">Acceptance letter</option>
                                    <option value="2#Online Exam">Online Exam</option>
                                    <option value="0.6#Revision Paper">Revision Paper</option>
                                    <option value="1.5#Blog Writing">Blog Writing</option>
                                    <option value="1#Executive Summary">Executive Summary</option>
                                </select>
                            </div>

                        <label>Subject Area:</label>
                            <div id="SubjectArea">
                                <select>
                                    <option value="1#Any" selected="selected"> Select Subject </option>
                                    <option value="1#Archaeology">Archaeology</option>
                                    <option value="1.4#Architecture">Architecture</option>
                                    <option value="1.1#Arts">Arts</option>
                                    <option value="1#Astronomy">Astronomy</option>
                                    <option value="1#Biology">Biology</option>
                                    <option value="1#Business">Business</option>
                                    <option value="1.2#Chemistry">Chemistry</option>
                                    <option value="1#Childcare">Childcare</option>
                                    <option value="1.5#Computers">Computers</option>
                                    <option value="1#Counseling">Counseling</option>
                                    <option value="1.1#Criminology">Criminology</option>
                                    <option value="1#Economics">Economics</option>
                                    <option value="1#Education">Education</option>
                                    <option value="1.3#Engineering">Engineering</option>
                                    <option value="1#Environmental-Studies">Environmental-Studies</option>
                                    <option value="1#Ethics">Ethics</option>
                                    <option value="1#Ethnic-Studies">Ethnic-Studies</option>
                                    <option value="1.2#Finance">Finance</option>
                                    <option value="1#Food-Nutrition">Food-Nutrition</option>
                                    <option value="1.3#Forensic Science">Forensic Science</option>
                                    <option value="1#Geography">Geography</option>
                                    <option value="1#Healthcare">Healthcare</option>
                                    <option value="1#History">History</option>
                                    <option value="1.2#Law">Law</option>
                                    <option value="1.05#Linguistics">Linguistics</option>
                                    <option value="1.15#Literature">Literature</option>
                                    <option value="1#Management">Management</option>
                                    <option value="1.5#Mathematics">Mathematics</option>
                                    <option value="1.2#Medicine">Medicine</option>
                                    <option value="1#Music">Music</option>
                                    <option value="1#Nursing">Nursing</option>
                                    <option value="1#Philosophy">Philosophy</option>
                                    <option value="1#Physical-Education">Physical-Education</option>
                                    <option value="1.2#Physics">Physics</option>
                                    <option value="1#Political-Science">Political-Science</option>
                                    <option value="1.5#Programming">Programming</option>
                                    <option value="1#Psychology">Psychology</option>
                                    <option value="1#Religion">Religion</option>
                                    <option value="1#Sociology">Sociology</option>
                                    <option value="1.6#Statistics">Statistics</option>
                                </select>
                            </div>

                            <label>Title:</label>
                            <input type="text" id="Order title" name="Order title" className="border border-gray-500"/>

                        <label>Input the Paper Instructions:</label>
                        <textarea id="Paper Instructions" name="Paper Instructions" rows="4" cols="50" className="py-7" className="border border-gray-500">
                        </textarea>

                        <label>Upload relevant materials</label>
                        <input type="file" name="File Uploads" id="File Uploads" />

                        <label>Select Preferred paper format:</label>
                        <div className="flex flex-row" >

                            <input type="radio" className="hover:bg-gray-500" value="APA" name="Paper format"/>APA

                            <input type="radio" className="hover:bg-gray-500" value="MLA" name="Paper format"/>MLA

                            <input type="radio" className="hover:bg-gray-500" value="Chicago" name="Paper format"/>Chicago

                            <input type="radio" className="hover:bg-gray-500" value="Other" name="Paper format"/>Other
                        </div>
                    </div>
                </form>
                <hr className="border-red-100"/>


                {/*<ComputePrice />*/}
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


                {/*<FloatingCalcTool />*/}
                <div>
                    Checkout Details
                    <div id="result"></div>
                    {/*<div>
                        Academic Level
                    </div>
                    <hr />
                    <div>
                        Type of Paper
                    </div>
                    <div>
                        Subject Area
                    </div>
                    <div>
                        <div id="PageNumber">NoOfPages</div>
                        * 
                        <div id="StandardPrice">Custom Standard Price</div>
                    </div>
                    <div>
                        Total Price:
                        <div className="bg-red-800 underline" id="TotalPrice"></div>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Coupon Code" className="border border-gray-500"/>
                        <button type="submit" className="inline-flex text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:underline rounded text-lg">Apply Coupon Code</button>
                    </div>*/}
                </div>

                <CheckoutButton />

            </main>
            <Footer />
        </>
    )
}

export default orderNow