import styles from '../styles/topnav.module.css'
import React from 'react'
import Image from 'next/image'

const TopNav = () => {
    return(
        <nav class="flex flex-row space-x-7 m-2 border-b-2">
            <Image
                class="m-8"
                src="/writing.png"
                alt="Premium logo"
                width={150}
                height={110}
                />
            <ul className=''>
                <div class="flex flex-row space-x-10 absolute top-10 left-30">
                <li className="rounded hover:bg-red-700 text-2xl">Home</li>
                <li className="rounded hover:bg-red-700 text-2xl">Services</li>
                <li className="rounded hover:bg-red-700 text-2xl">About us</li>
                <li className="rounded hover:bg-red-700 text-2xl">Pricing</li>
                <li className="rounded hover:bg-red-700 text-2xl">Contact Us</li>
                </div>
                <div className="flex flex-row space-x-5 absolute top-10 right-5">
                <button className="rounded bg-red-700 text-2xl hover:underline">Log In</button>
                <button className="rounded bg-red-700 text-2xl hover:underline">Sign Up</button>
                </div>
            </ul>
        </nav>
    )
}

export default TopNav