// Load mongoose
const mongoose = require('mongoose')

// Pointing to the schema property (shortcut) (Schema is a class)
const Schema = mongoose.Schema

// Instantiate a new Schema object for fruit and structure our data
const logSchema = new Schema({
    title: { 
        // expecting the "name" property to be a string
        type: String,
        // validation to make sure the data is legit 
        required: true
    },
    entry: { type: String },
    shipIsBroken: { type: Boolean, default: true, required: true }
}, { timestamps: true })

// create our model using our fruitSchema and give our collection a name of "fruits"
const Log = mongoose.model('logs', logSchema)

// exporting the Fruit model as a module
module.exports = Log