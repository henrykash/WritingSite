import {useState} from 'react';
import Axios from 'axios';

const ProfilePage = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [data, setData] = useState(null);
    Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3080/user",
      }).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    return (
        <div>
            <h1>Get Profile User</h1>
            <button onClick={getUser}>Submit</button>
            {data ? <h1>Welcome Back {data.username}</h1> : null}
        </div>
    )
}