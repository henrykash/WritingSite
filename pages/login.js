import Footer from '../Components/footer/Footer'
import React from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import Image from "next/image";
import {signIn, signOut, useSession} from 'next-auth/client'

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  const [session, loading] = useSession();

  return (
    <div>
      <nav className="flex flex-row">
        <Link href="/">
          <Image
            className= "relative flex ml-2"
            src="/writing.png"
            alt="Premium logo"
            width={90}
            height={75}
          />
        </Link>

        <Link href="/signup">
        <div className="underline text-xl bold text-right absolute top-10 right-5" type="submit">SIGN UP</div>
        </Link>
      </nav>
      <main className="bg-gray-300">
        <style jsx>{`
          form {
            margin: 0 auto;
            align-self: center;
            display: block;
            margin: 0px 27.5px 12px;
            padding: 32px 20px 20px;
            background: #FFFFFF;
            text-align: center;
            max-width: 55%;
            margin-left: 22%;
          },
          input {
            background-color: grey
            border-radius: 1px;
            border: 1px solid red;
            padding: 5px 10px;
          },
          button[type="submit"],
            input[type="submit"] {
              border: none;
              margin-top: 40px;
              
            },
          `}
          </style>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}> 
          {/*<p className="bold text-3xl">LOG IN</p>
            
            <div>
              <label htmlFor="email">Email Address</label>
              <input {...register("email address")} placeholder="Enter your email address"/>
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input {...register("password")} placeholder="Input your password" />
            </div>

            <div>
              <Link href="/">
                <button type="submit" className="bg-gray-500 hover:underline">Log In</button>
              </Link>
            </div>

            <Link href="/forgotpassword">
            <p className="underline">Forgot password?</p>
            </Link>*/}
            <div class="tracking-wide text-black transition-colors duration-200 text-xl mr-0 hover:underline">
              {!session && (
                <>
                Log In to enjoy our services.{" "}
                <button onClick={signIn} className="underline">Sign In here</button>
                <br />
                {/*<Link href="/secret">
                  <button>You have to be signed in</button>
              </Link>*/}
                </>
              )}
              {session && (
                <>
                Signed in as {session.user.email}{""}
                <button onClick={signOut}>Sign Out</button>
                </>
              )}
            </div>
        </form>

      </main>
      <Footer />
    </div>
  
  )
}

export default LogIn