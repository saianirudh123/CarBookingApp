const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect('mongodb+srv://<username>:<password>@cluster0.6oyaw.mongodb.net/carbookingapp')


    const connection = mongoose.connection;
    connection.on('connected', () => {
        console.log('Mongo DB connection established')
    });
    connection.on('error',() => {
        console.log('MongoDB connection error')
    });

}

connectDB()

module.exports = mongoose;