import { getCollection } from '../collection';
import { saveDoc, generateId } from '../utils';
import { hashingPassword } from '../utils';

const createUser = async(collection: string, data: any) => {
    const table = getCollection(collection);
    const { name, image, password } = data;
    const id = generateId();
    const hashedPassword = await hashingPassword(password);
    table[id] = {
        userId: id,
        name,
        image,
        hashedPassword
    };
    saveDoc(collection, table);
    return table[id];
}

export default createUser;