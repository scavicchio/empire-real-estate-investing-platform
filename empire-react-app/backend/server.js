const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://empire:12345@empire-qfp0m.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).catch(err => console.log(err));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established");

});

const usersRouter = require('./routes/users.js');
//const buildingsRouter = require('./routes/buildings.js');

app.use('/users', usersRouter);
//app.use('/buildings',buildingsRouter); 


app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);



});