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

let driversCopy = drivers.slice;
function appendDriver(name){
return driversCopy.push(name);
}
function prependDriver(name){
return driversCopy.unshift(name);
}
function removeLastDriver(){
driversCopy.pop();
return;
}
function removeFirstDriver(){
driversCopy.shift();
return;
}
appendDriver("Broom")
prependDriver("Arnold");
removeLastDriver();
removeFirstDriver();
