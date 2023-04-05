// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./breads.js')


const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }, 
    startDate: {
        type: Date,
        required: true
    },
    bio: String
}, { toJSON: { virtuals: true }})




// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker


// Virtuals:
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})
