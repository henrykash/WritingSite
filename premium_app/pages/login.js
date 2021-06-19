import {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const signin = () => {
        axios({
            method: 'post',
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: 'http://localhost:3000/login',
        }).then((res) => console.log(res))
    }

    return (
        <>
        <div>
            <h1>Login to exclusively enjoy our services</h1>
                <input
                placeholder="username"
                onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input
                placeholder="password"
                onChange={(e) => setLoginPassword(e.target.value)}
                />
            <button onClick={signin}>Submit</button>
        </div>
        </>
    )
}

export default Login