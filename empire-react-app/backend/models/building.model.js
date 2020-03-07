const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
    building_name: {
        type: String,
        required: true,
        trim: true,
    },
    value: {type: Number, required: true, trim: true},
    cap_rate: {type: Number, required: true, trim: true},
    irr: {type: Number, required: true, trim: true},
    address_1: {type: String, required: true, trim: true},
    zip_code: {type: String, required: true, trim: true},
    city: {type: String, required: true, trim: true},
    state: {type: String, required: true, trim: true},
    country: {type: String, required: true, trim: true},
    phone_number: {type: String, required: true, trim: true},
    property_type: {type: String, required: true, trim: true},
    investment_strategy: {type: String, required: true, trim: true},
    targeted_average_cash_yield: {type: Number, required: true, trim: true},

});

const Building = mongoose.model('Building', buildingSchema);
module.exports = Building;