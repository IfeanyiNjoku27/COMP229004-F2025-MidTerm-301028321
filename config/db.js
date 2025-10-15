require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://ifeanyinj12_db_user:YX4PBTHV9ZrREbIT@cluster0.yb9fvzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}