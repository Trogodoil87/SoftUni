const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/Carbicle';
require('./Car.js');

async function init() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');
    } catch (err) {
        console.error('Database connection failed!')
        process.exit(1);
    }
}

module.exports = init;
