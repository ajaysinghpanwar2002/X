import fs from "fs";
import dirname from "./getDirName";

const saveDoc = (collectionName: string, tableData: any) => {
    const filePath = `${dirname}/src/data/${collectionName}.json`;

    try {
        let updatedData = {};

        if (fs.existsSync(filePath)) {
            const existingData = fs.readFileSync(filePath, "utf8");
            const jsonData = JSON.parse(existingData);

            updatedData = {
                ...jsonData,
                ...tableData,
            };
        } else {
            updatedData = tableData;
        }

        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    } catch (err) {
        console.error(`Error saving JSON to ${filePath}:`, err);
    }
};

export default saveDoc;
