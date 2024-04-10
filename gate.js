class Gate{

    constructor(carPark, gateNum){}

    getGateNum(){
        return gateNum;
    }

    getCarPark(){
        return carPark;
    }

    checkTicket(ticket){ // ensures that ticket is valid and for the correct car park
        const Ticket = require('./ticket.js');
        let isValid = ticket.isValid();
        if (isValid && ticket.getTicketDetails()[0] == carPark){
            return true; 
        } else {
            return false;
        }
    }
}

module.exports = Gate;