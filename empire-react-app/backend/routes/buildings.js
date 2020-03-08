const router = require('express').Router();
let Building = require('../models/building.model.js');

router.route('/').get((req,res) =>{

    Building.find()
        .then(buildings => res.json(buildings))
        .catch(err => res.status(400).json('Error: '+err));

});

router.route('/add').post((req,res) => {
    
    const building_name = req.body.building_name;
    const value = req.body.value;
    const developer_name = req.body.developer_name;
    const cap_rate = req.body.cap_rate;
    const irr = req.body.irr;
    const address_1 = req.body.address_1;
    const zip_code = req.body.zip_code;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const property_type = req.body.property_type;
    const investment_strategy = req.body.investment_strategy;
    const targeted_average_cash_yield = req.body.targeted_average_cash_yield;
    const picture_url = req.body.picture_url;

    const newBuilding = new Building({building_name, developer_name, picture_url, value, cap_rate, irr, address_1, zip_code, city, state, country, property_type, investment_strategy, targeted_average_cash_yield});

    newBuilding.save()
        .then(() => res.json())
        .catch(err => res.status(400).json('Error: '+err));

});

router.route('/:building_name').get((req, res) => {
    Building.find({building_name: req.params.building_name})
    .then(building => res.json(building))
    .catch(err => res.status(400).json('Error '+ err));
});

module.exports = router;