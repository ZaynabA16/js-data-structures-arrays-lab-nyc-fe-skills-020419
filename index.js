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
destructivelyAppendDriver("Ralph");
destructivelyPrependDriver("Bob");
destructivelyRemoveLastDriver();
destructivelyRemoveFirstDriver();

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
let driversCopy = drivers.slice();
driversCopy.pop();
return driversCopy;
}
function removeFirstDriver(){
let driversCopy = drivers.slice();
driversCopy.shift();
return driversCopy;
}

appendDriver("Broom");
prependDriver("Arnold");
removeLastDriver();
removeFirstDriver();