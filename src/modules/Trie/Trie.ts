import TrieNode from "./TrieNode";

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode("");
    }

    insert(word: string) {
        let node = this.root;

        for (const char of word) {
            let foundChild = node.children.find(child => child.char === char);
            if (!foundChild) {
                foundChild = new TrieNode(char);
                node.children.push(foundChild);
            }
            node = foundChild;
        }

        node.isEndOfWord = true;
    }

    search(prefix: string): string[] {
        let node = this.root;

        for (const char of prefix) {
            const foundChild = node.children.find(child => child.char === char);
            if (!foundChild) {
                return [];
            }
            node = foundChild;
        }

        const suggestions: string[] = [];
        this.collectWords(node, prefix, suggestions);

        return suggestions;
    }

    collectWords(node: TrieNode, prefix: string, suggestions: string[]) {
        if (node.isEndOfWord) {
            suggestions.push(prefix);
        }

        for (const child of node.children) {
            this.collectWords(child, prefix + child.char, suggestions);
        }
    }
}

export default Trie;
