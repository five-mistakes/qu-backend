const Ticket = require('../models/ticket');
const Utils = require('../utils/utils');

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
        const sendTicket = {
            id: populatedTicket._id,
            timestamp: populatedTicket.timestamp
        }
        response.status(200).send(sendTicket);
    } catch(e) {
        console.error(e.message);
        response.status(400).send('Bad Request');
    }
}

const sendEmail = async (request, response) => {
    try {
        console.log(request.body);
        const email = request.body.email;
        const ticket = request.body.ticketId;
        const savedTicket = await Ticket.findById(ticket);
        const populatedTicket = await (await savedTicket.execPopulate('service', 'name')).execPopulate('facility', 'name');
        await Utils.sendEmail(email, populatedTicket);
    }catch(e) {
        response.status(400).send('Bad Request');
    }
}

module.exports = {getTicket, addTicket, sendEmail};