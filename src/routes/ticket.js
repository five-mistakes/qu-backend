const Ticket = require('../models/ticket');

const getTicket = async (request, response) => {
    try {
        const id = request.query.id;
        const ticket = await Ticket.findOne({ _id: id });
        response.status(200).send(ticket.toJson());
    } catch(e) {
        response.status(400).send('Bad Request');
    }
}
const addTicket = async(request, response) => {
    try{
        const newTicket = new Ticket(request.body);
        const savedTicket = await newTicket.save();
        const populatedTicket = await (await savedTicket.execPopulate('service', 'name')).execPopulate('facility', 'name');
        response.status(200).send(populatedTicket.toJSON());
    } catch(e) {
        console.error(e.message);
        response.status(400).send('Bad Request');
    }
}

module.exports = {getTicket, addTicket};