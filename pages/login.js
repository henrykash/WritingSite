import Footer from '../Components/footer/Footer'
import TopNav from '../Components/nav/TopNav'
import Link from 'next/link'

const login = () => {
  return (
    <div>
      <TopNav />
      <form>
        <h1 className="underline font-bold text-3xl">Log In</h1>
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
        },
        button[type="submit"],
          input[type="submit"] {
            border: none;
            margin-top: 40px;
            padding: 20px;
          }
        `}
        </style>
        <input placeholder="Enter username or email address"/>   
        <input type="password" placeholder="Enter your password"/>
        <input type="submit" />
        <Link href="/signup">
          <p className="underline">Create an account instead</p>
        </Link>
      </form>
      <Footer />
    </div>
  )
}

export default login