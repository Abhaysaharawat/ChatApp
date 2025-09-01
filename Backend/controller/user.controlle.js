import User from "../models/user.model.js"

export const sigup = (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;
        if (password != confirmpassword) {
            return res.status(400).json({ message: "Password do not match" })
        }
        const user = User.findone({ email })
        if (user) {
            return res.stat
            us(400).json({ message: "Email alraedy exists" })
        }
        const newUser = new User(
            {
                name,
                email,
                password,
            });
        newUser
            .save()
            .then(() =>
                res.status(201).json({ message: "User registered successfully" })
            );
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Server error"})
    }
};