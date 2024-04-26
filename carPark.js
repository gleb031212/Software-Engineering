class carPark{

    constructor(id, totalSpaces, availableSpaces, vehicles){
        this.carParkID = id;
        this.totalSpaces = totalSpaces;
        this.availableSpaces = availableSpaces;
        this.vehicles = vehicles;

        this.spaceVisual = [];
        for (let i = 0; i < this.totalSpaces; i++){
            this.spaceVisual.push(null);
        }
    }

    getCarParkID(){
        return this.carParkID;
    }

    getTotalSpaces(){
        return this.totalSpaces;
    }

    getAvailableSpaces(){
        return this.availableSpaces;
    }

    getVehicles(){
        return this.vehicles;
    }

    setTotalSpaces(totalSpaces){
        this.totalSpaces = totalSpaces;
    }

    updateAvailableSpaces(){
        this.availableSpaces = this.totalSpaces - this.vehicles.length;
    }

    assignSpace(vehicle){
        // will find an available space in car park by finding null in spaceVisual, then assign the space to the vehicle by returning that space and replacing null with the vehicle object
        for (let i = 0; i < this.spaceVisual.length; i++){
            if (this.spaceVisual[i] === null){
                this.spaceVisual[i] = vehicle;
                return i;
            }
        }
    }
}

