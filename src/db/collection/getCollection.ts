import fs from "fs";
import { dirname } from "../utils";

const getCollection = (collectionName:string) => {
    const res = fs.readFileSync(`${dirname}/src/data/${collectionName}.json`,"utf8");
    return JSON.parse(res);
};

export default getCollection;