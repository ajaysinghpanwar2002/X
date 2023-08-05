import {getCollection} from '../collection';
import { saveDoc,generateId } from '../utils';

const createUser = (collection:string, data:any)=>{
    const table = getCollection(collection);
    const {name, image} = data;
    const id = generateId();
    table[id] = {
        userId : id,
        name,
        image,
    };
    saveDoc(collection,table);
    return table[id];
}

export default createUser;