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
const driversCopy = drivers.slice;
driversCopy.push(name);
return; 
}
function prependDriver(name){
const driversCopy = drivers.slice;  
driversCopy.unshift(name);
return;
}
function removeLastDriver(){
const driversCopy = drivers.slice; 
driversCopy.pop();
return;
}
function removeFirstDriver(){
const driversCopy = drivers.slice;
driversCopy.shift();
return;
}
appendDriver("Ralph")
prependDriver("Bob");
removeLastDriver();
removeFirstDriver();
