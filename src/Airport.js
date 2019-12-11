function Airport(capacity = 20){
  this.hangar = [];
  this.capacity = capacity;
};
Airport.prototype.instructLand = function(plane){
  // if ((this.hangar).length === this.capacity)throw "At capacity, turn back!";
  (this.hangar).push(plane);
};
Airport.prototype.instructTakeoff = function(plane){
  (this.hangar).splice((this.hangar).indexOf(plane),1);
};
