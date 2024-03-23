const express = require("express");
const app = express();
require("./Connection/connect");
<<<<<<< HEAD
const port = 4000;
=======
const port = 3000;
>>>>>>> 5b0b226 (Second Commit)
const auth = require("./routes/auth");
const list = require("./routes/list");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/",(req,res)=>{
<<<<<<< HEAD
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
=======
    // app.use(express.static(path.resolve(__dirname,"frontend","build")));
    // res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
>>>>>>> 5b0b226 (Second Commit)
})

app.listen(port, () => {
    console.log("Server is Started.");
});