const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;