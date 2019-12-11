function Plane(){
  this.inFlight = true;
};
Plane.prototype.land = function(){
  this.inFlight = false;
};
Plane.prototype.takeoff = function(){
  this.inFlight = true;
};
