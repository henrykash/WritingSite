import Link from 'next/link';

const PlaceOrder = () => {
    return (
    <>
    <form className="grid justify-items-center">
        <h2 className="underline">Place Order</h2>
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

        <div className="flex flex-col">
            <label>Academic level:</label>
            <div className="flex flex-row" >
                <input type="radio" className="hover:bg-gray-500" value="High School" name="Academic Level" />High School

                <input type="radio" className="hover:bg-gray-500" value="Undergraduate" name="Academic Level" />Undergraduate

                <input type="radio" className="hover:bg-gray-500" value="Masters" name="Academic Level" />Masters

                <input type="radio" className="hover:bg-gray-500" value="PhD" name="Academic Level"/>PhD
            </div>

            <label>Type of paper: </label>
                <div>
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
                <div>
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
    </>
    )
}

export default PlaceOrder