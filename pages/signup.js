import Link from 'next/link'
import React from 'react'
import SignUpForm from '../Components/signUp/signupForm'
import Footer from '../Components/footer/Footer'

const SignUpPage = () => {
    return (
        <div className=" flex flex-col bg-gray-200 justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center">
                    <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">Sign up</h2>
                    <p className="mt-2 text-center text-md text-gray-600">already have an account?{' '}
                    <Link href='/login'>
                        <a className="text-blue-500 underline">Log in</a>
                    </Link>
                    </p>
                </div>  
              <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <SignUpForm />                  
              </div>
            </div>
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default SignUpPage;