const drivers = ["Milo", "Otis", "Garfield"];
let driversCopy = drivers.slice();
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
destructivelyAppendDriver("Ralph");
destructivelyPrependDriver("Bob");
destructivelyRemoveLastDriver();
destructivelyRemoveFirstDriver();

appendDriver("Broom");
prependDriver("Arnold");
removeLastDriver();
removeFirstDriver();

function appendDriver(name){
let driversCopy = drivers.slice();
driversCopy.push(name);
return driversCopy;
}
function prependDriver(name){
let driversCopy = drivers.slice();
driversCopy.unshift(name);
return driversCopy;
}
function removeLastDriver(){
driversCopy.pop();
return driversCopy;
}
function removeFirstDriver(){
let driversCopy = drivers.slice();
driversCopy.shift();
return driversCopy;
}
