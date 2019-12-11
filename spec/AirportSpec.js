describe('Airport', function(){

beforeEach(function(){
  airport = new Airport;
  plane = new Plane;
  fullAirport = new Airport;
  doubleSizeAirport = new Airport(40);
  for (n = 0; n < 20; n++){
    fullAirport.instructLand(new Plane);
    doubleSizeAirport.instructLand(new Plane);
  };
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

  it('Has default capacity of 20 for planes, can be changed',function(){
    foolsErrand = () => [fullAirport.instructLand(plane)];
    expect(foolsErrand).toThrow('At capacity, turn back!');
    wiseErrand = () =>[doubleSizeAirport.instructLand(new Plane)];
    expect(wiseErrand).not.toThrow('At capacity, turn back!');
  });
});
