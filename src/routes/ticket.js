const ticket = require('../models/ticket');
const Ticket = require('../models/ticket');

const getTicket = async (request, response) => {
    try {
        const id = request.params.id;
        const ticket = await Ticket.findOne({ __id: id });
        response.status(200).send(ticket.toJson());
    } catch(e) {
        response.status(400).send('Bad Request');
    }
}
const addTicket = async(request, response) => {
    try{
        const newBurger = await Ticket.create(request.body);
        response.status(200).send(newBurger.toJson());
    } catch(e) {
        response.status(400).send('Bad Request');
    }
}

module.exports = {getTicket, addTicket};