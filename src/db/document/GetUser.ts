import { getCollection } from "../collection";

const getUserOne = (collection: string, data: any) => {
    const table = getCollection(collection);
    const { id } = data;
    if (table[id]) {
        return table[id];
    }
    return false;
}

const getUserAll = (collection: string) => {
    const table = getCollection(collection);
    return Object.values(table);
};

const getUserbyName = async(collection: string, name: string) => {
    const table = await getCollection(collection);
    for (const user in table) {
        if (table[user].name === name) {
            return table[user].hashedPassword;
        }
    }
    return null;
}

export { getUserAll, getUserOne, getUserbyName }