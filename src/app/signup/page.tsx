"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

import { useDispatch } from "react-redux";
import { logIn } from "@/redux/features/auth-slice";
import { AppDispatch } from "@/redux/store";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface UserDataItem {
    name: string;
}

export default function SignUp() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [password, setPassword] = useState("");
    const { push } = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [userData, setUserData] = useState<UserDataItem[]>([]);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get("/api/users");
                setUserData(response.data.doc);
            } catch (error) {
                console.error("Error while fetching users:", error);
            }
        };
        getUsers();
    }, []);

    const namesArray = userData.map(item => item.name);
    const isUsernameTaken = namesArray.includes(name);

    const nameRegex = /^[^\s]+$/;
    const imageUrlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;

    const handleSubmit = async () => {
        try {
            if (!name.match(nameRegex) || !imageUrl.match(imageUrlRegex)) {
                setShowAlert(true);
                return;
            }
            if (isUsernameTaken) {
                setShowAlert(true);
                return;
            }
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
                <Input placeholder="enter username" onChange={(e) => setName(e.target.value)} />
                <Input placeholder="enter password" className="mt-2" onChange={(e) => setPassword(e.target.value)} />
                <Input placeholder="enter image url" className="mt-2" onChange={(e) => setImageUrl(e.target.value)} />
                <Button variant="outline" onClick={handleSubmit} className="mt-2">submit</Button>
                <div className="mt-5">
                    {showAlert && (
                        <Alert variant="destructive">
                            <ExclamationTriangleIcon className="h-4 w-4" />
                            <AlertTitle>Failed to signup</AlertTitle>
                            <AlertDescription>
                                choose a unique or valid username | Enter a valid URL
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    );
}
