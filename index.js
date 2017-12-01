
function findMatching(){
  let findMatching = drivers.filter(function(drivers, index, name){
    return index === name.indexOf(drivers);
  });  
}