const express = require("express");
const app = express();
require("./Connection/connect");
const auth = require("./routes/auth");
const list = require("./routes/list");
const cors = require("cors");
const path = require("path");
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
})

app.listen(port, () => {
    console.log(`Server is working on Port ${port}.`);
});