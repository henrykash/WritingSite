import Link from 'next/link'

const Footer = () => {
    return (
        <div className='flex flex-row grid grid-cols-2 overflow-hidden'>
            <div>
                <b>DISCLAIMER</b>
                <p><b className="underline">Get Work Done</b> is a unique service that provides guidance with different types of content. Please rest assured that the service is absolutely legal and doesn’t violate any regulations. It can be used for generating new ideas and thoughts for your own project, additional insight into the subject, or encouragement for further researches.</p>
            </div>
            <div className="mr-0">
                <h3 className='font-bold underline'>Quick links</h3>
                <ul>
                    <li>Our Services</li>
                    <li>Pricing Tiers</li>
                    <li>Talk to us</li>
                </ul>
            </div>
            <br />
            <footer className='md:w-auto justify-center'>&copy; Copyright 2021 <b>Get Work Done</b></footer>
        </div>
    )
}

export default Footer