const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//Sign Up
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password: hashpassword });
        await user.save().then(() =>
            res.status(200).json({ message: "Sign Up SuccessFull." })
        );
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: "User Already Exists." });
    }
})

//Sign In 
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(200).json({ message: "Please Sign Up First" });
        }
        const ispasswordcorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!ispasswordcorrect) {
            res.status(200).json({ message: "Password is not correct." });
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ others, message: "Sign In SuccessFull." });

    } catch (error) {
        console.log(error);
    }
})
module.exports = router;