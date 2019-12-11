function Plane(){
  this.flight = true;
};
Plane.prototype.land = function(){
  this.flight = false;
};
Plane.prototype.takeoff = function(){
  this.flight = true;
};
