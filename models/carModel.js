const mongoose = require('mongoose');

const carSchema =  new mongoose.Schema({
    
    name : {type: 'string', required: true},
    image : {type: 'string', required: true},
    capacity : {type: 'number', required: true},
    fuelType :{type: 'string', required: true},
    bookedTimeSlots : [
        {
            from : {type: 'string', required: true},
            to : {type: 'string', required: true}
        }
    ],
    rentPerHour : {type: 'number', required: true}
},{timeStamps:true})

const carModel = mongoose.model('cars',carSchema);
module.exports = carModel;