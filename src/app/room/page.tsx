"use client";

import { useAppSelector } from "@/redux/store";

export default function Room() {
    const username = useAppSelector((state) => state.authReducer.value.username);
    return (
        <div>
            <h2>Username: {username} </h2>
            private room
            public room
        </div>
    )
}