'use client'

import React, { useState, useEffect } from "react";
import Trie from "@/modules/Trie/Trie";
import axios from "axios";

import { Input } from "@/components/ui/input"

interface AutoCompleteProps {
    onSearch: (searchTerm: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const autoCompleteTrie = new Trie();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/users");
                const data = await response.data.doc;
                data.forEach((user: { name: string }) => {
                    autoCompleteTrie.insert(user.name);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchTerm(value);
        setSuggestions(autoCompleteTrie.search(value));
        onSearch(value);
    };

    return (
        <div>
            <Input
                type="text"
                placeholder="Search username..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <ul>
                {suggestions.map((suggestion) => (
                    <li key={suggestion}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default AutoComplete;
