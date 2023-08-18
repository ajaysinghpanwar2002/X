import { UserData } from "@/types/CreateUser";
import { getUserbyName } from "@/db";

export const POST = async (req: Request, res: Response) => {
    try {
        const { name, password } = await req.json() as UserData;
        // linear searching to get the userID from the name
        const userID = await getUserbyName("user",name);
        console.log(userID);
        // you have a map ds where you have stored userid and hashed password
        // you will now have the hashed password and request password now you will compare them and return boolean
    } catch (error) {
        
    }
};