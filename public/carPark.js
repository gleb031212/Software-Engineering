const Space = require('./space');
class carPark{

    constructor(id, name, spacesX, spacesY, vehicles){
        this.carParkID = id;
        this.name = name;
        this.spacesX = spacesX;
        this.spacesY = spacesY;
        this.vehicles = vehicles;

        this.spaceGrid = {};
        for (let i = 1; i <= spacesX; i++) {
            this.spaceGrid[i] = {};
            for (let j = 1; j <= spacesY; j++) {
                this.spaceGrid[i][j] = new Space;
            }
        }
    }
    
    generateArray() {
        const result = [];
        var col = "Col   ";
        for (let j = 1; j <= this.spacesY; j++) {
            col += j;
        }
        console.log(col);
    
        for (let i = 1; i <= this.spacesX; i++) {
            var row = [];
            for (let j = 1; j <= this.spacesY; j++) {
                row.push(this.spaceGrid[i][j].currentStatus);
            }
            result.push(row);
        }
        console.log(result);
        return result;
    }

    getCarParkID(){
        return this.carParkID;
    }

    getTotalSpaces(){
        return this.spacesX*this.spacesY;
    }

    getVehicles(){
        return this.vehicles;
    }

    getName(){
        return this.name;
    }

    setSpaceStatus(x,y,status){ // Status: 0 Free, 1 Occupied, 2 Maintenance
        this.spaceGrid[x][y].setStatus(status);
        return this.spaceGrid[x][y];
    }

    // assignSpace(vehicle){
    //     // will find an available space in car park by finding null in spaceVisual, then assign the space to the vehicle by returning that space and replacing null with the vehicle object
    //     for (let i = 0; i < this.spaceVisual.length; i++){
    //         if (this.spaceVisual[i] === null){
    //             this.spaceVisual[i] = vehicle;
    //             return i;
    //         }
    //     }
    // }
}
test = new carPark(1, "Blackdale Car Park", 8, 8, []);
test.setSpaceStatus(1,1,1);
test.setSpaceStatus(2,4,1);
test.setSpaceStatus(5,6,2);
test.setSpaceStatus(1,7,1);
test.setSpaceStatus(1,3,1);
test.setSpaceStatus(7,5,1);
test.setSpaceStatus(6,2,1);
test.setSpaceStatus(6,4,1);
test.setSpaceStatus(8,2,1);
test.setSpaceStatus(3,6,2);


const tableData = test.generateArray();

//assignSpace(carPark){
    //for space
    /// Finds a free space on the carPark, returns its ID or any other identefier that can be displayed to the user.
    /// then changes the status to occupied.
//}

//changeSpaceStatus(space???, newStatus){
//          assigns the newStatus to the selected space.
//}