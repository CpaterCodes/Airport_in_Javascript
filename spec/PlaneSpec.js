describe('Plane',function(){
  beforeEach(function(){
    airport = new Airport;
    plane = new Plane;
  });

  it('Will not takeoff if already in flight', function(){
    doubleTakeoff = () => [airport.instructTakeoff(plane)];
    expect(doubleTakeoff).toThrow('Plane already in flight!');
  });

  it('Will not land if already landed', function(){
    airport.instructLand(plane);
    doubleLand = () => airport.instructLand(plane);
    expect(doubleLand).toThrow('Plane already landed!');
  });

});
