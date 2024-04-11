class Gate{

    constructor(carPark, gateNum){
        this.carPark = carPark;
        this.gateNum = gateNum;
    }

    getGateNum(){
        return this.gateNum;
    }

    getCarPark(){
        return this.carPark;
    }

    checkTicket(ticket){ // ensures that ticket is valid and for the correct car park
        let isValid = ticket.isValid();
        if (isValid && ticket.getTicketDetails()[0] == this.carPark){
            return true; 
        } else {
            return false;
        }
    }
}

module.exports = Gate;
const Ticket = require('./ticket.js');