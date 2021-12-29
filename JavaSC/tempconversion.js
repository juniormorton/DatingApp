// Sets the current temp. for Kelvin
let kelvin = 293;

// Converts Kelvin into Celsius
const celsius = kelvin - 273;

// Converts Kelvin into Fahrenheit, then rounds
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

// Converts Kelvin into Newton, then rounds
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature, (${kelvin} in Kelvin) is ${fahrenheit} degrees in Fahrenheit, ${celsius} degrees in Celsius, and ${newton} degrees in Newton!`);
