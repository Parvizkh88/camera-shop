import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const useLogin = () => {
    const [token, setToken] = useState()
   
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    })
    return token;
}

export default useLogin;