const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {type: String, required: true, trim: true},
    first_name: {type: String, required: true, trim: true},
    last_name: {type: String, required: true, trim: true},
    address_1: {type: String, required: true, trim: true},
    zip_code: {type: String, required: true, trim: true},
    city: {type: String, required: true, trim: true},
    state: {type: String, required: true, trim: true},
    country: {type: String, required: true, trim: true},
    phone_number: {type: Number, required: true, trim: true},
    employeer: {type: String, required: true, trim: true},
    company_role: {type: String, required: true, trim: true},
    license: {type: String, trim: true}, 
    user_type: {type: String, required: true, trim: true},

});

const User = mongoose.model('User', userSchema);
module.exports = User;