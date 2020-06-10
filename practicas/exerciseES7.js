// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');//false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const dragons2 =[];
    if (dragons.includes('Tim')){
        let name = 'Tim';
        dragons2.push(name);
    }

console.log('dragons2', dragons2); //that will copy Tim for each index not correct. better to use filter



const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter(name => name.includes('John')) //aqui solo va crear un nuevo arreglo con el valor que tiene John, osea  ['Johnathan']




// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (x) => x ** 100;
power100(x);


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
power100(10000); 
/* equals infinity because it is over the overflow value that is standard for double data type and that is:
2**1023.99999999999994
1.7976931348621742e+308 */

/* extreme explanation

A limit has to be chosen, since we only have a certain number of bits at our disposal to represent a number. The choice is somewhat arbitrary.

However, there are a few standard representations that are commonly used and implemented as low-level instructions within the FPU, so it's common to use one of them in order to make the calculations go faster.

a double
 is the standard way of representing real numbers using 64 bits.

You have 1 bit of sign, 52 bits of "data" and 11 bits of exponent (1 for sign and 10 for value).

Using that representation, a number takes the form:

+/- [0 1] * 2[-2 ^ 10 2 ^ 10[

Where [0 1] is quantized using 52 bits.

210 is 1024, so the maximum representable value is

1 * 2 ^ ( 2 ^ 10 - 1 )
which is 2 ^ 1023 */