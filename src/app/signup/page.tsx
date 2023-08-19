"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
            dispatch(logIn(name));
            push('/room');
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div className="flex justify-start px-10 mt-5">
            <div className="w-1/4">
                <Input placeholder="enter name" onChange={(e) => setName(e.target.value)} />
                <Input placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
                <Input placeholder="enter image url" onChange={(e) => setImageUrl(e.target.value)} />
                <Button variant="outline" onClick={handleSubmit} className="mt-2">submit</Button>
            </div>
        </div>
    );
}
