import styles from '../../styles/topnav.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopNav = () => {
    return(
        <nav class="flex flex-row space-x-7 m-2 border-b-2">
            <Link href='/'>
            <Image
                class="m-8"
                src="/writing.png"
                alt="Premium logo"
                width={150}
                height={110}
                />
            </Link>
            <ul>
               <div class="flex flex-row space-x-10 absolute top-10 left-30">
                <Link href='/'>
                <li className="rounded hover:underline text-xl">Home</li>
                </Link>

                <Link href='/ourservices'>
                <li className="rounded hover:underline text-xl">Services</li>
                </Link>

                <Link href='/ordernow'>
                <li className="rounded hover:underline text-xl">Pricing</li>
                </Link>

                <Link href='/contactus'>
                <li className="rounded hover:underline text-xl">Talk to Us</li>
                </Link>

                <Link href='/checkout'>
                <li className="rounded font-bold hover:underline text-xl ">Order Now</li>
                </Link>
                </div>

                <div className="flex flex-row space-x-5 absolute top-10 right-5">
                <Link href='/login'>
                <button className="rounded text-xl hover:underline">Log In</button>
                </Link>
                <Link href='/signup'>
                <button className="rounded text-xl hover:underline">Sign Up</button>
                </Link>
               </div>

            </ul>
        </nav>
    )
}

export default TopNav