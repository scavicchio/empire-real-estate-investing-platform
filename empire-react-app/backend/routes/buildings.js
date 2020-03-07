const router = require('express').Router();
let Building = require('../models/building.model');

router.route('/').get((req,res) =>{

    Building.find()
        .then(buildings => res.json(buildings))
        .catch(err => res.status(400).json('Error: '+err));

});

router.route('/add').post((req,res) => {
    
    const building_name = req.body.building_name;
    const value = req.body.value;
    const cap_rate = req.body.cap_rate;
    const irr = req.body.irr;
    const address_1 = req.body.address_1;
    const zip_code = req.body.zip_code;
    const city = req.bosy.city;
    const state = req.body.state;
    const country = req.body.country;
    const property_type = req.body.property_type;
    const investment_strategy = req.body.investment_strategy;
    const targeted_average_cash_yield = req.body.targeted_average_cash_yield;


    const newBuilding = new Building({building_name, value, cap_rate, irr, address_1, zip_code, city, state, country, property_type, investment_strategy, targeted_average_cash_yield});

    newBuilding.save()
        .then(() => res.json())
        .catch(err => res.status(400).json('Error: '+err));

});

module.exports = router;