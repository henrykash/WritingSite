import React from 'react'
import Image from 'next/image'
import TypingComponent from '../../Components/typing/Typing'
import Link from 'next/link'



const Header = () => {
    return (
      <>
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <Image
              class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="/writingcover.jpg"
              height={750}
              width={1260}
              alt="Hero"
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl bg-lime-">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Get all your assignments done
                <br className="hidden md:block" />
                <TypingComponent />{" "}
                
              </h2>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Tired of doing assignments and need some to help you out
                worry no more because we got you covered.
              </p>
              <div className="flex items-center">
                <Link href="/" 
                >
                  <button >
                  Get started
                  </button>
                </Link>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header
