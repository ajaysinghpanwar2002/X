import { useState, useEffect } from "react";
import Trie from "@/modules/Trie/Trie";
import axios from "axios";

const AutoComplete: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const autoCompleteTrie = new Trie();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/users");
                const data = await response.data.doc;
                // Insert each name from the JSON data into the Trie
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
        console.log(suggestions);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search name..."
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
