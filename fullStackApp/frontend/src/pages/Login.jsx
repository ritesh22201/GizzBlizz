import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuth, auth } = useContext(AuthContext)
    const navigate = useNavigate()

    const fetchLogin = (payload) => {
        axios.post("https://backendtesting-74jt.onrender.com/users/login", payload).then((res) => {
            console.log(res)
            alert(res.data.msg)
            localStorage.setItem("token", res.data.token)
            setAuth(true)
            navigate("/")
        }).catch((err) => console.log(err))


        const handleSubmit = (e) => {
            e.preventDefault();
            const logindata = {
                email: email,
                password: password
            }

            fetchLogin(logindata)
            setEmail("")
            setPassword("")
        };
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div>
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit">Login</button>


                </form>
            </div>
        )
    }
}

export default Login;