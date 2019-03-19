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
destructivelyAppendDriver("Ralph")
destructivelyPrependDriver("Bob");
destructivelyRemoveLastDriver();
destructivelyRemoveFirstDriver();

appendDriver("Broom")
prependDriver("Arnold");
removeLastDriver();
removeFirstDriver();

function appendDriver(name){
driversCopy.push(name);
return;
}
function prependDriver(name){
driversCopy.unshift(name);
return;
}
function removeLastDriver(){
driversCopy.pop();
return;
}
function removeFirstDriver(){
driversCopy.shift();
return;
}
