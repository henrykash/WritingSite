import React, {useState} from 'react';
import TopNav from '../Components/TopNav'
import Footer from '../Components/Footer'

const SignInForm = () => {
  const [input, setInput] = useState('');

    const registerUser = async event => {
      event.preventDefault() //this prevents page reload
      console.log(input);
      try {
        const res = await fetch('./api/register', { //fetching and calling our REGISTER API
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            emailAddress: input
          })
        })
      } catch(err) { 
        console.log("There's an error");
      }
    }
  
    return (
      <div>
        <TopNav />

        <div>
        <form onSubmit={registerUser} className='flex flex-column space-x-5'>
        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='email' type='email' aria-label='email address' placeholder='Enter your email address' 
        value={input}
        onChange={e => setInput(e.target.value)} /> {/*setting the state variable to whatever value is changed */}
        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='Signup-password' type='password' aria-label='Password' placeholder='Enter your Password' />
        <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit' onClick={registerUser}>
          Sign Up
        </button>
        </form>
        </div>

        <Footer />
      </div>
    )
  }

export default SignInForm

