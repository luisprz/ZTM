// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// it should look like this:
/* '     ||<- Start line'
'       🐢'
'       🐇'
 */
// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); //trim does erase blank spaces so it will be "🐢=======" start counting after second its 7 = instead of 9


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
//console.log(`my ${obj.my} is ${obj.is} the ${obj.the} `)
Object.entries(obj).map(value => value.join(" ")).join(' '); //une las propiedades con sus valores dandole un espacio y luego cada undice con el otro dandole su espacio.