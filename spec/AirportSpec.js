describe('Airport', function(){

beforeEach(function(){
  airport = new Airport;
  plane = new Plane;
  fullAirport = new Airport;
  // var n;
  // for (n = 0, n < 20, n++){
  //   fullAirport.instructLand(new Plane);
  // };
});

  it('Can instruct a FLYING plane to land', function(){
    airport.instructLand(plane);
    expect(airport.hangar).toEqual(jasmine.arrayContaining([plane]));
  });

  it('Can instruct a LANDED plane to take off',function(){
    airport.instructLand(plane);
    airport.instructTakeoff(plane);
    expect(airport.hangar).not.toEqual(jasmine.arrayContaining([plane]));
  });

  it('Has default capacity at which it stops accepting planes',function(){
    expect(fullAirport.instructLand(plane)).toThrow('At capacity, turn back!');
  });
});
