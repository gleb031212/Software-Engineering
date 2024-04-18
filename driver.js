class Driver {
    
    constructor(newUsername, newEmail, newPassword, newName) {
        this.balance = 0;
        this.username = newUsername;
        this.email = newEmail;
        this.password = newPassword;
        this.name = newName;
    }
    parkingRequest(destination, arriveTime, duration, vehicleToPark) {
        // if (carPark avaiable from arriveTime to endTime){
        let newTicket = new Ticket(destination, arriveTime, duration, vehicleReg);
        //}
        // Returns the assigned parking space
    }
    makePayment(amount) { //bool
        balance = balance + amount;
    }
    notifyDeparture() {
        
    }
    getBalance() {
        return this.balance;
    }
    //Functions from detailed class description
    getUsername() {
        return this.username;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setDetails(newUsername, newEmail, newPassword, newName) {
        this.username = newUsername;
        this.email = newEmail;
        this.password = newPassword;
        this.name = newName;
    }
    setUsername(newUsername) {
        this.username = newUsername;
    }
    setPassword(newPassword) {
        this.password = newPassword;
    }
    setName(newName) {
        this.name = newName;
    }
    setEmail(newEmail) {
        this.email = newEmail;
    }
    extendTicket() { //bool
        
    }
    register() { //bool
    
    }
}

const Ticket = require('./ticket.js');
// const testDriver = new Driver("testyDriver123","test@Driver.com","12345","Test Driver");
// console.log(testDriver.getEmail());
// console.log(testDriver.getBalance());

module.exports = Driver;