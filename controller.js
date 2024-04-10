const Gate = require('./gate.js');
const Ticket = require('./ticket.js');
let gate1 = new Gate(1,1);
let ticket1 = new Ticket(1, new Date(), 1000, "ABC123");
gate1.checkTicket(ticket1);