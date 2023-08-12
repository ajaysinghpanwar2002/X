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

export {getUserAll, getUserOne}