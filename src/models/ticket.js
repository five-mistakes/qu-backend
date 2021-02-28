const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const TicketSchema = mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    },
    facility: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Facility', 
        required: true,
    },
    service: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Service'
    },
    qrPhoto: {
        data: Buffer,
        contenType: String
    }
});

TicketSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
});


module.exports = mongoose.model('Ticket', TicketSchema);