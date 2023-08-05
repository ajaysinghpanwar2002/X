"use client";
import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";

function Login() {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = () => {
        dispatch(logIn(username));
    }
    const handleLogout = () => {
        dispatch(logOut());
    }
    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Login