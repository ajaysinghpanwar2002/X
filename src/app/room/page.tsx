"use client";

import { useAppSelector } from "@/redux/store";

export default function Room() {
    const username = useAppSelector((state) => state.authReducer.value.username);
    return (
        <div className="flex justify-center">
            {username ? <h2>welcome {username} to the rooms </h2> : null}
        </div>
    )
}