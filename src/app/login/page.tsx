"use client";
import { useState } from "react";
import axios from "axios";
import AutoComplete from "@/components/AutoComplete";
import { useRouter } from 'next/navigation';

//redux
import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";
//ui
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setloginStatus] = useState(true);

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const handleChildSearch = (searchTerm: string) => {
        setUsername(searchTerm);
    };
    const handleLogin = async () => {
        try {
            const response = await axios.post("/api/users/login", {
                name: username,
                password
            });

            if (response.status === 200) {
                console.log("User login successfully!");
                dispatch(logIn(username));
                router.push('/room');
            } else {
                setloginStatus(false);
                console.log("Login failed");
            }
        } catch (error) {
            setloginStatus(false);
            console.error("Error login user:", error);
        }
    };
    return (
        <div className="w-1/4 px-10 mt-5">
            <AutoComplete onSearch={handleChildSearch} />
            {
                username ? (
                    <div>
                        <Input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
                        <Button variant="outline" onClick={handleLogin} className="mt-2">login</Button>
                    </div>
                ) : null
            }
            <div className="mt-5">
                {!loginStatus ? <div>
                    <Alert variant="destructive">
                        <ExclamationTriangleIcon className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Login failed. Try again later
                        </AlertDescription>
                    </Alert>
                </div> : null}
            </div>
        </div>
    )
}

export default Login;
