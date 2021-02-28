const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)

/**
 * Schema for the Facility
 */
const FacilitySchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    departments: [
        {
            type: String
        }
    ]
});

FacilitySchema.index({ name: 'string' });

FacilitySchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
});

module.exports = mongoose.model('Facility', FacilitySchema);