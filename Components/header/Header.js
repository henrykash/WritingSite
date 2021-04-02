import React from 'react'
import Image from 'next/image'
import TypingComponent from '../../Components/typing/Typing'

const Header = () => {
    return (
        <div className='grid grid-flow-col grid-col-2'>
            <div>
            <Image
                src="/writingcover.jpg"
                alt="Picture of the author"
                width={900}
                height={500}
            />
            </div>
            <div className=''>
            <h2 className='font-bold text-3xl'>Get Work Done <TypingComponent /></h2>
            <div>
                <ul className='text-xl'>
                    <li type='disc'>Original content - No plagiarism.</li>
                    <li type='disc'>High-quality content.</li>
                    <li type='disc'>In time work.</li>
                    <li type='disc'>Availability of multiple tiers:
                    <dl>
                        <dd>College</dd>
                        <dd>Undergraduate</dd>
                        <dd>Masters</dd>
                        <dd>PHD</dd>
                    </dl>
                    </li>
                    <li type='disc'><b>All time</b> online support</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Header