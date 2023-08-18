"use client";
import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";
import AutoComplete from "@/components/client/AutoComplete";

function Login() {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const handleChildSearch = (searchTerm: string) => {
        setUsername(searchTerm);
    };
    const handleLogin = () => {
        dispatch(logIn(username));
    }
    const handleLogout = () => {
        dispatch(logOut());
    }
    return (
        <div>
            {username}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <AutoComplete onSearch={handleChildSearch} />
        </div>
    )
}

export default Login