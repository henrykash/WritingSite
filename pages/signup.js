import Footer from '../Components/footer/Footer'
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import TopNav from '../Components/nav/TopNav'

const signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-auto">
      <TopNav />
      <form onSubmit={handleSubmit(onSubmit)}>
      <style jsx>{`
        form {
          max-width: 500px;
          margin: 0 auto;
        },
        input {
          display: block;
          box-sizing: border-box;
          width: 100%;
          border-radius: 4px;
          border: 1px solid red;
          padding: 10px 15px;
          margin-bottom: 10px;
          font-size: 14px;
        },
        button[type="submit"],
          input[type="submit"] {
            text-transform: uppercase;
            border: none;
            margin-top: 40px;
            padding: 20px;
          }
        `}
      </style>
        <input {...register("userName")} placeholder="Enter username"/>
        <input type="email" placeholder="Enter email address"/>     
        <input type="password" placeholder="Enter your password"/>
        <input type="password" placeholder="Confirm your password"/>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
      <Footer />
    </div>
  )
}

export default signup