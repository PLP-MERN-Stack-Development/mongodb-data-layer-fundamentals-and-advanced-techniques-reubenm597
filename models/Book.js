const { mongoose } = require('../config/db');
const { Schema } = mongoose;

// The schema for the Book model
const bookSchema = new Schema({ 
 title: { type: String, required: true },
 author : { type: String, required: true },
 genre : { type: String, required: true },
 published_year : { type: Number, required: true },
 price : { type: Number, required: true },
 in_stock : { type: Boolean, required: true },
 pages : { type: Number, required: true },
 publisher : { type: String, required: true },
}, {timestamps: true});


module.exports = mongoose.model('Book', bookSchema);