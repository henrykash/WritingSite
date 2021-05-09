import Footer from '../Components/footer/Footer'
import TopNav from '../Components/nav/TopNav'

const login = () => {
  return (
    <div>
      <TopNav />
      <form>
        <h1 className="underline font-bold">Log In</h1>
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
        <input placeholder="Enter username or email address"/>   
        <input type="password" placeholder="Enter your password"/>
        <input type="submit" />
      </form>
      <Footer />
    </div>
  )
}

export default login