const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
drivers.push(name);
}
function destructivelyPrependDriver(name){
drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
drivers.pop();
}
function destructivelyRemoveFirstDriver(){
drivers.shift();
}
destructivelyAppendDriver("Ralph")
destructivelyPrependDriver("Bob");
destructivelyRemoveLastDriver();
destructivelyRemoveFirstDriver();
function appendDriver(name){
// let driversCopy= drivers.slice;
driversCopy.push(name);
return; 
}
function prependDriver(name){
let driversCopy= drivers.slice;  
drivers.splice(2,0, name);
return;
}
function removeLastDriver(){
let driversCopy= drivers.slice; 
driversCopy.pop();
return;
}
function removeFirstDriver(){
let driversCopy= drivers.slice;
driversCopy.shift();
return;
}
appendDriver("Broom")
prependDriver("Arnold");
removeLastDriver();
removeFirstDriver();
