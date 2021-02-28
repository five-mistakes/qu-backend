const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

/**
 * Schema for the service
 */
const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    averageDuration: {
        type: Number,
        min: 0
    },
    facility: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Facility' 
    }
});

ServiceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
});
module.exports = mongoose.model('Service', ServiceSchema);