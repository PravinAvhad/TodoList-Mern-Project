const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//Create Task
router.post("/addtask", async (req, res) => {
    try {
        const { title, body, id } = req.body;
        const existinguser = await User.findById(id);
        if (existinguser) {
            const list = new List({ title, body, user: existinguser });
            await list.save().then(() => res.status(200).json({ message: "Task Added.", list }));
            existinguser.list.push(list);
            existinguser.save();
        }
        else {
            res.status(400).json({ message: "User Not Found." })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Task Not Added." })
    }
})

<<<<<<< HEAD
//Get all Tasks
=======
//Get all Tasks 
>>>>>>> 5b0b226 (Second Commit)
router.get("/getalltasks/:id", async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
        if (list.length !== 0) {
            res.status(200).json({ message: "Succesfully get Task.", list });
        }
        else {
            res.status(200).json({ message: "No Task Created Till Now.", list });
        }
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: "Not get Task." })
    }
})

//Update Task
router.put("/updatetask/:id", async (req, res) => {
    try {
        const { title, body } = req.body;
        const list = await List.findByIdAndUpdate(req.params.id, { title, body });
<<<<<<< HEAD
        list.save().then(() => res.status(200).json({ message: "Task Updated." }));
=======
        list.save().then(() => 
            res.status(200).json({ message: "Task Updated." })
        );
>>>>>>> 5b0b226 (Second Commit)
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: "Task Not Updated." })
    }
})

<<<<<<< HEAD
=======
//Update Checkbox 
router.put("/updatecheckbox/:id", async (req, res) => {
    try {
        const list = await List.findByIdAndUpdate(req.params.id,{"$set" : {"checkbox": true}});
        list.save().then(() => {
        res.status(200).json({ message: "Checkbox Updated." })
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Checkbox Not Updated." })
    }
})

>>>>>>> 5b0b226 (Second Commit)
//Delete Task
router.delete("/deltask/:id", async (req, res) => {
    try {
        const { id } = req.body;
        const existinguser = await User.findByIdAndUpdate(id, { $pull: { list: req.params.id } });
        if (existinguser) {
            await List.findByIdAndDelete(req.params.id)
                .then(() => res.status(200).json({ message: "Task Deleted." }));
        }
        else {
            res.status(200).json({ message: "User Not Found." })
        }
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: "Task Not Updated." })
    }
})
module.exports = router;