import bcrypt from "bcrypt";

export const hashingPassword = async(password: string) => {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error(error,"errror while generating hashed password")
    }
}