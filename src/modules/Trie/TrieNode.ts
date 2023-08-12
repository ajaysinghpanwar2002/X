class TrieNode {
    children: TrieNode[];
    char: string;
    isEndOfWord: boolean;

    constructor(char: string) {
        this.char = char;
        this.children = [];
        this.isEndOfWord = false;
    }
}

export default TrieNode;
