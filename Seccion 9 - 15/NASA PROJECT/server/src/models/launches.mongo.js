const mongoose = require('mongoose')

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
     },
     launchDate: {
        type: Date,
        required: true,
     },
     mission: {
        type: String,
        required: true,
     },
     rocket: {
        type: String,
        required: true,
     },
     target: {
      type: mongoose.ObjectId,
      ref: 'Planet'
     }

    
    
    /* mission: 'first name exploration',
    rocket: 'Explorer name',
    launchDate: new Date('December 27, 2030'),
    target: 'kepler- 422 b',
    flightNumber: 100,
    customers: ['ZTM','NASA','APLAPLAC'],
    upcoming: true,
    success: true, */
})