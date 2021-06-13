import Footer from '../Components/footer/Footer'
import React from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import Image from "next/image";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div>
      <nav>
        <Link href="/" className="inline-flex items-center">
          <Image
            className="ml-4"
            src="/writing.png"
            alt="Premium logo"
            width={90}
            height={75}
          />
        </Link>
        <div className="text-center block text-3xl bold">Gets Work Done is happy to see you here!</div>
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
              padding: 20px;
            },
          `}
          </style>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}> 
          <div>
            <label htmlFor="username">USERNAME: </label>
            <input {...register("username")}/>
          </div>

          <div>
            <label htmlFor="email">EMAIL ADDRESS: </label>
            <input {...register("email address")} />
          </div>

          <div>
            <label htmlFor="password">INPUT PASSWORD:</label>
            <input {...register("password")} />
          </div>

          <div>
            <label htmlFor="confirm-password">CONFIRM YOUR PASSWORD:</label>
            <input {...register("confirm password")} />
          </div>

          <div>
            <Link href="/">
              <button type="submit" className="bg-gray-500">CREATE ACCOUNT</button>
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  
  )
}

export default Signup