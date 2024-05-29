const Status = {
    Free: "O",
    Occupied: "X",
    Maintenance: "M"
};
class Space{
constructor() {

    let currentStatus = Status.Free;
    this.currentStatus = currentStatus;
}

setStatus(status) {
    if (status === Status.Occupied || status === 1) {
        this.currentStatus = Status.Occupied;
    }
    else if (status === Status.Maintenance || status === 2) {
        this.currentStatus = Status.Maintenance;
    }
    else if (status === Status.Free || status === 0) {
        this.currentStatus = Status.Free;
    }
}

}
module.exports = Space;