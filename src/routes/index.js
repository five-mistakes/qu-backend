const express = require('express');
const FacilitiesRoute = require('./facilities');
const ServiceRoute = require('./services');
const TicketRoute = require('./ticket');
const quRouter = express.Router();

quRouter.route('/facilities').get(FacilitiesRoute.getFacilities);
quRouter.route('/services').get(ServiceRoute.getServices);
quRouter.route('/cities').get(FacilitiesRoute.getCities);
quRouter.route('/tickets').get(TicketRoute.getTicket);
quRouter.route('/tickets').post(TicketRoute.addTicket);

module.exports = quRouter;