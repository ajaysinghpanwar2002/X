"use client";
import { useState } from "react";
import axios from "axios";
import AutoComplete from "@/components/AutoComplete";
import { useRouter  } from 'next/navigation';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { push } = useRouter();
    const handleChildSearch = (searchTerm: string) => {
        setUsername(searchTerm);
    };
    const handleLogin = async () => {
        try {
            const response = await axios.post("/api/users/login", {
                name: username,
                password
            });
            console.log("User login successfully!");
            push('/');
        } catch (error) {
            console.error("Error login user:", error);
        }
    };
    return (
        <div>
            <AutoComplete onSearch={handleChildSearch} />
            {
                username ? (
                    <div>
                        <input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin}>login</button>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Login