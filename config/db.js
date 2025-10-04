mongoose = require('mongoose');
require('dotenv').config();

//
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/booksdb';
mongoose.set('strictQuery', false);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = { connectDB, mongoose };



