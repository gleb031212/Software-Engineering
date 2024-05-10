class Ticket{

    constructor(carPark, timeStart, duration, regNum){
        this.carPark = carPark;
        this.timeStart = timeStart;
        this.duration = duration;
        this.regNum = regNum;
    }
    getTicketDetails(){
        return [this.carPark, this.timeStart, this.duration, this.regNum];
    }

    
    getTimeStart(){
        return this.timeStart;
    }

    // checks that the ticket is in date - might not be for correct car park gate
    isValid(){
        const currentTime = new Date();
        if (currentTime.getTime() > (new Date(this.timeStart.getTime() + this.duration).getTime())){
            return false;
        }
        else{
            return true;
        }
    }
}

module.exports = Ticket;