const Park = function (name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinos = [];
}

Park.prototype.numberOfDinos = function () {
    return this.collectionOfDinos.length;
}

Park.prototype.addDino = function (dino) {
    this.collectionOfDinos.push(dino);
}

Park.prototype.removeDinoByName = function (dino) {
    const indexOfDino = this.collectionOfDinos.indexOf(dino);
    this.collectionOfDinos.splice(indexOfDino, 1);
  }

Park.prototype.mostAttractiveDino = function () {
    let popularity = 0
    let selectedDino
    for (dino of this.collectionOfDinos) {
        if (dino.guestsAttractedPerDay > popularity){
            popularity = dino.guestsAttractedPerDay
            selectedDino = dino
        } 
    }
    return dino
}


module.exports = Park;