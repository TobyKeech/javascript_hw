const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let trex;
  let triceritops;
  let gerrosore;

  beforeEach(function () {
    park = new Park("Jurrasic World", 100);
    trex = new Dinosaur('T Rex', "carnavor", 50)
    triceritops = new Dinosaur('triceritop', "carnavor", 100)
    gerrosore = new Dinosaur('gerrosore', 'tobyavor', 500)
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic World');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinos;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(trex); 
    const actual = park.numberOfDinos();
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
      park.addDino(trex);
      park.addDino(triceritops);
      park.removeDinoByName(trex);
      const actual = park.numberOfDinos();
      assert.deepStrictEqual(actual, 1);
    });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
      park.addDino(trex);
      park.addDino(triceritops);
      park.addDino(gerrosore);
      const actual = park.mostAttractiveDino();
      assert.deepStrictEqual(actual, gerrosore)
  })
  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(trex);
    park.addDino(triceritops);
    park.addDino(gerrosore);
    const actual = park.findSpecies(species)
    assert.deepStrictEqual(actual, 1)
  } );

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
