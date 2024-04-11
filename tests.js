const Gate = require('./gate.js');
const Ticket = require('./ticket.js');

/*TEST1*/
let gate1 = new Gate(1,1);
// This creates a ticket which is valid for one hour and was valid from 45 mins ago
//This ticket is valid, should output true
let ticket1 = new Ticket(1, new Date(Date.now() - 45 * 60 * 1000), 60 * 60 * 1000, "ABC123");
console.log(gate1.checkTicket(ticket1));

/*TEST2*/
let gate2 = new Gate(1,2);
// This creates a ticket which is valid for 30 mins and was valid from 45 mins ago
//This ticket is invalid, should output false
let ticket2 = new Ticket(1, new Date(Date.now() - 45 * 60 * 1000), 30 * 60 * 1000, "ABC123");
console.log(gate2.checkTicket(ticket2));

/*TEST3*/
let gate3 = new Gate(2,1);
// This creates a ticket which is valid for one and was valid from 45 mins ago for car park 2
//This ticket is invalid (wrong car park), should output false
let ticket3 = new Ticket(1, new Date(Date.now() - 45 * 60 * 1000), 60 * 60 * 1000, "ABC123");
console.log(gate3.checkTicket(ticket3));