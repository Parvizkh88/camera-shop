import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import HttpService from "../service/HttpService"
import UserService from './../service/UserService';

const Login = () => {

    const navigate = useNavigate()
    const username = useRef()
    const password = useRef()

    const [error, setError] = useState(false)

    const handleSumbit = async (e) => {
        e.preventDefault()
        let result = await UserService.login(username.current, password.current)
        result ? navigate("/") : setError(true)
    }

    console.log("render")

    return (
        <div className="container">
            <form className="d-flex flex-column mx-auto border shadow-lg p-5 rounded my-5"
                style={{ maxWidth: "500px" }} onSubmit={handleSumbit}>

                <div className="d-flex justify-content-between p-1">
                    <label style={{ minWidth: "150px" }}>Username:</label>
                    <input placeholder="username" className="p-2 border rounded" id="username" onChange={(e) => username.current = e.target.value}></input>
                </div>
                <div className="d-flex justify-content-between p-1 my-2">
                    <label style={{ minWidth: "150px" }}>Password:</label>
                    <input placeholder="password" type="password" className="p-2 border rounded" id="password" onChange={(e) => password.current = e.target.value}></input>
                </div>
                {error && <p className="text-danger">Wrong Username Or Password</p>}
                <button type="submit" className="btn btn-success my-2">Login</button>
            </form>
        </div>
    );
}

export default Login;