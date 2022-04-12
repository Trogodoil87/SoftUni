const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/shelter';
require('./Cat.js');

async function init() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');
    } catch (err) {
        console.error('Error connecting to database');
        process.exit(1);
    }
}

module.exports = init;