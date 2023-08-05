"use client"

import { useState } from "react";
import axios from "axios";

export default function SignUp() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/users", {
                name,
                image: imageUrl,
            });
            console.log("User created successfully!");
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div>
            <input placeholder="enter name" onChange={(e) => setName(e.target.value)} />
            <br />
            <input placeholder="enter image" onChange={(e) => setImageUrl(e.target.value)} />
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}
