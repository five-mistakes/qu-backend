const Facility = require('../models/facility');


const getFacilities = async(request, response) => {
    try {
        const city = request.query.city;
        const facilities = await Facility.find({ city }).exec();
        response.status(200).send(facilities.map(fac => fac.toJSON()));
    } catch(e) {
        response.status(400).send('Bad Request');
    }
}

const getCities = async (request, response) => {
    try {
        const cities = await Facility.distinct('city').exec();
        response.status(200).send(cities);
    } catch(e) {
        response.status(400).send('Bad Request');
    }
}

module.exports = {getFacilities, getCities};