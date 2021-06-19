 import {useState} from 'react';
 import axios from 'axios';

const Signup = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        axios({
            method: 'POST',
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: 'http://localhost:3080/signup',
        }).then((res) => console.log(res))
    }

    return (
        <>
        <div>
            <h1>Create an account to get started with us</h1>
            <input
            placeholder="username"
            type="text"
            onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
            placeholder="password"
            type="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Submit</button>
        </div>
        </>
    )
}

export default Signup