function Airport(capacity = 20){
  this.hangar = [];
  this.capacity = capacity;
};
Airport.prototype.instructLand = function(plane){
  if((this.hangar).length === this.capacity) throw "At capacity, turn back!";
  if(plane.inFlight === false) throw "Plane already landed!";
  plane.land();
  (this.hangar).push(plane);
};
Airport.prototype.instructTakeoff = function(plane){
   if(plane.inFlight === true) throw "Plane already in flight!";
   plane.takeoff();
  (this.hangar).splice((this.hangar).indexOf(plane),1);
};
