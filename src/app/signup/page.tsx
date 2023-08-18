"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter  } from 'next/navigation';

import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";

export default function SignUp() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [password, setPassword] = useState("");
    const { push } = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/users", {
                name,
                image: imageUrl,
                password
            });
            console.log("User created successfully!");
            localStorage.setItem("userId", response.data.doc.userId);
            localStorage.setItem("hashedPassword",response.data.doc.hashedPassword);
            dispatch(logIn(name));
            push('/');
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div>
            <input placeholder="enter name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input placeholder="enter image url" onChange={(e) => setImageUrl(e.target.value)} />
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}
