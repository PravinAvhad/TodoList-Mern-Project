const express = require("express");
const app = express();
require("./Connection/connect");
const port = 3000;
const auth = require("./routes/auth");
const list = require("./routes/list");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
    // res.status(200).json({
    //     message:'request'
    // })
})

app.listen(port, () => {
    console.log("Server is Started.");
});