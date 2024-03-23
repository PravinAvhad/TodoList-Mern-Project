const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
=======
    checkbox: {
        type: Boolean,
        default: false,
    },
>>>>>>> 5b0b226 (Second Commit)
    user: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
}, { timestamps: true }
)

module.exports = mongoose.model("lists", listSchema);