const mongoose = require("mongoose");
const { number } = require("zod");

mongoose.connect("mongodb://localhost:27017/paytmDatabse")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,

    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    success: {
        type: Boolean,
        default: false  // Default value is false until the transfer is successful
      }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);


module.exports = {
	User: User, 
    Account: Account 
};

