const Service = require('../models/service');
const Facility = require('../models/facility');
const getServices = async(request, response) => {
    try {
        const facility = request.query.facility;
        const fac = await Facility.findOne({name: facility});
        const services = await Service.find(fac ? {facility:fac._id}: {}).populate('facility', 'name').exec();
        response.status(200).send(services.map(srv => srv.toJSON()));
    } catch(e) {
        response.status(400).send('Bad Request');
    }
}

module.exports = {getServices};