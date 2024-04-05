class Ticket{

    constructor(carPark, timeStart, duration, regNum){}

    getTicketDetails(){
        return [carPark, timeStart, duration, regNum];
    }
    
    getTimeStart(){
        return timeStart;
    }

    // checks that the ticket is in date - might not be for correct car park gate
    isValid(){
        const currentTime = new Date();
        if (currentTime < (timeStart + duration)){
            return false;
        }
        else{
            return true;
        }
    }
}