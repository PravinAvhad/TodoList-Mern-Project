const mongoose = require("mongoose");
<<<<<<< HEAD

const conn = async (req, res) => {
    try {
        await mongoose
            .connect("mongodb+srv://pravinavhad_10:pravinavhad10@cluster0.pxehjzu.mongodb.net/")
=======
const dotenv = require('dotenv');

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const conn = async (req, res) => {
    try {
        await mongoose
            .connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pxehjzu.mongodb.net/`)
>>>>>>> 5b0b226 (Second Commit)
            .then(() => {
                console.log("Mongoose is Connected");
            });
    } catch (error) {
        // console.log(error);
        res.status(200).json({ message: "Not Connected" });
    }
}
conn();