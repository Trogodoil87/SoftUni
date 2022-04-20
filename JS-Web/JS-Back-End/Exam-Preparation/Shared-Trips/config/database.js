const mongoose = require('mongoose');

const dbName = 'SharedTrip';

const connectionString = `mongodb://localhost:27017/${dbName}`;
require('../models/User.js');

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');
    } catch (err) {
        console.error('Database connection failed!');
        process.exit(1);
    }
}
