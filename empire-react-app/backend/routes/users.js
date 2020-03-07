const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) =>{

    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));

});

router.route('/add').post((req,res) => {
    const username = req.body.username;

    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const address_1 = req.body.address_1;
    const zip_code = req.body.zip_code;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const phone_number = req.body.phone_number;
    const employeer = req.body.employeer;
    const company_role = req.body.company_role;
    const license = req.body.license;
    const user_type = req.body.user_type;


    const newUser = new User({username, password, first_name, last_name, address_1, zip_code, city, state, country, phone_number, employeer, company_role, license, user_type});

    newUser.save()
        .then(() => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));

});


router.route('/:username').get((req, res) => {
    User.find({username: req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error '+ err));
});

module.exports = router;