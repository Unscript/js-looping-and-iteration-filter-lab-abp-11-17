// Code your solution in this file
let findMatching = drivers.filter(function(drivers, index, name){
  return index === name.indexOf(drivers);
});