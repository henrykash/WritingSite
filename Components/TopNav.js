import styles from '../styles/topnav.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
            <ul>
               <div class="flex flex-row space-x-10 absolute top-10 left-30">
                <li className="rounded hover:bg-red-700 text-xl">Home</li>
                <li className="rounded hover:bg-red-700 text-xl">Services</li>
                <li className="rounded hover:bg-red-700 text-xl">About us</li>
                <li className="rounded hover:bg-red-700 text-xl">Pricing</li>
                <li className="rounded hover:bg-red-700 text-xl">Contact Us</li>
                </div>

                <div className="flex flex-row space-x-5 absolute top-10 right-5">
                <Link href='/'>
                <button className="rounded bg-red-700 text-xl hover:underline">Log In</button>
                </Link>
                <Link href='/'>
                <button className="rounded bg-red-700 text-xl hover:underline">Sign Up</button>
                </Link>
               </div>
            </ul>
        </nav>
    )
}

export default TopNav