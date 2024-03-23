const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const conn = async (req, res) => {
    try {
        await mongoose
            .connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pxehjzu.mongodb.net/`)
            .then(() => {
                console.log("Mongoose is Connected");
            });
    } catch (error) {
        // console.log(error);
        res.status(200).json({ message: "Not Connected" });
    }
}
conn();