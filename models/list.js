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
    checkbox: {
        type: Boolean,
        default: false,
    },
    user: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
}, { timestamps: true }
)

module.exports = mongoose.model("lists", listSchema);