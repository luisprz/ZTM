Javascript structure and details

JAVASCRIPT DATA TYPES
-----------------
1. Number es +,-,/,%(residuo de la división siendo el dividendo mult por un num entero mas cercano) es decir es number type es la propiedad de hacer operaciones con numeros
2. String its just text inside “String” or ‘String’    10+”1” es 101 pero 10-“1” es 9  y “10”-“10” es NAN
3. Boolean thatss just true or false si tienes 3>2 dara true pero si tienes 3=3 dara un reference error, esto es porque una comparación de igualdad se representa con 3===3 tambien podemos hacer 3 !== 3 y dará false es el opuesto al anterior.
4. Undefined
5. Null //indica que esta vacio, es preferible a undefined
<!-- 6. Symbol (new in ECMAScript 6) -->
7. Object // { something: "" }, {something2: " "}
//Object is js type but array (there are typed arrays tho) isnt because they doesnt have a fixed length. object have properties and values
8. typed arrays:
born out of the need to have an efficient way to handle binary data in WebGL. A Typed Array is a slab of memory with a typed view into it, much like how arrays work in C. Because a Typed Array is backed by raw memory, the JavaScript engine can pass the memory directly to native libraries without having to painstakingly convert the data to a native representation. As a result, typed arrays perform a lot better than JavaScript arrays for passing data to WebGL and other APIs dealing with binary data.
Typed array views act like single-type arrays to a segment of an ArrayBuffer. There are views for all the usual numeric types, with self-descriptive names like Float32Array, Float64Array, Int32Array and Uint8Array. There's also a special view which has replaced the pixel array type in Canvas's ImageData: Uint8ClampedArray.


JAVASCRIPT COMPARISONS
-----------------
!==
===
>=
<=
>
<
JAVASCRIPT VARIABLES
-----------------
Var  son las variables a las cuales le asignas lo que desees var Three = 3 la variable tendrá asignado valor 3 sin embargo no puedes hacer Var 3 = 4 porque como regla no puede tener de nombre un numero ni un símbolo exceptuando $ y _ tampoco puede ser un js KEYWORDS
<!-- let (new in ECMAScript 6)-->  a diferencia de var esta no funciona fuera de un scope. pero se puede reasignar dentro del scope
<!-- const (new in ECMAScript 6)--> igual que let pero no se puede reasignar

JAVASCRIPT CONDITIONALS (control flow)
-----------------
if
else
else if  === if -> else if -> else 


<!-- ternary operator -->
<!-- switch -->


JAVASCRIPT LOGICAL OPERATORS
-----------------

&&  equals and
||  equals or
! esto convierte en lo opuesto : !true === false





JAVASCRIPT FUNCTIONS
-----------------
var a = function name() {}   // este tipo de funcion se llama function expression el nombre de la variable sera llamado como funcion mientras que el nombre de la funcion es solo por estetica LAS FUNCIONES SON TAMBIEN VARIABLES EN SI
function name() {} //function normal
return //toda funcion debe tener un return el cual devuelve el resultado y termina la funcion
//we need to return the result in function else it can go undefined. after return the function ends the program exits
<!-- () => (new in ECMAScript 6) -->

JAVASCRIPT DATA STRUCTURES
-----------------
Array  structure is --->  var array = [ {}, {}, [] ];
Object structure is ---> var objectName = [{ ParameterName: "values" }, { ParameterName2: "values"  }];

JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) // a pesar de que toma mas tiempo que un for (11ms vs 254ms), el foreach es mas entendible puesto que puedes aplicar DRY y llamar varias veces una misma funcion para trabajar con diferentes arreglos


JAVASCRIPT KEYWORDS
-----------------
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield)





////////////////////////////////////////======================================================================================================================================================================================
////////////////////////////////////////======================================================================================================================================================================================


JAVASCRIPT ADVANCED!!!

///////////////////////////////////////




DESTRUCTURING: 
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}
//si queremos las propiedades del objeto en una variable necesitamos hacer esto
const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;
//pero con destructuring lo podemos hacer mas facil
const { player, experience } = obj;
let { wizardLevel } = obj;




JAVASCRIPT TYPES
-----------------
1. Number 
2. String
3. Boolean
4. Undefined
5. Null
<!-- 6. Symbol (new in ECMAScript 6) --> //the syntax is as follow: let sym1 = Symbol();
// Lo interesante de Symbol es que puedes tener 2 variables diferentes con los mismos valores pero una no sera igual a la otra, ej:
{
    let sym2 = Symbol('foo');
    let sym3 = Symbol('foo');
    sym2 === sym3  //esto devuelve false por que un sym nunca sera igual a otro
}


7. Object

JAVASCRIPT COMPARISONS
-----------------

!==
===
>=
<=
>
<

JAVASCRIPT VARIABLES
-----------------
var
<!-- let (new in ECMAScript 6)-->  //puedes reasignarla let = something dentro de un scope. o sea su valor dependera del scope donde la estes llamando
<!-- const (new in ECMAScript 6)--> //con const puedes cambiar las propiedades dentro del objeto pero no el objeto como valor. No puedes resignarle el valor. usarlo para variables o funciones que no necesitan cambiar nunca

JAVASCRIPT CONDITIONALS
-----------------
if
else
else if

<!-- ternary operator -->  // strcture:  condition ? expr1 : expr2;  se lee: si la condicion es verdadera provee el valor de expresion 1 sino, expr 2
< !-- switch --> {

        //#1 change this function into a ternary and assign it to variable called experiencePoints
        function experiencePoints() {
        if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
    }

    //resp
    condition ? expr1 : expr 2;
    var experiencePoints = winBattle() ? 10 : 1;


    //Using this function, answer the questions below:
    function moveCommand(direction) {
        var whatHappens;
        switch (direction) {
            case "forward":
                break;
                whatHappens = "you encounter a monster";
            case "back":
                whatHappens = "you arrived home";
                break;
                break;
            case "right":
                return whatHappens = "you found a river";
                break;
            case "left":
                break;
                whatHappens = "you run into a troll";
                break;
            default:
                whatHappens = "please enter a valid direction";
        }
        return whatHappens;
    }

    //#2 return value when moveCommand("forward"); //undefined
    //#3 return value when moveCommand("back");    //"you arrived home"
    //#4 return value when moveCommand("right");   //"you found a river"
    //#5 return value when moveCommand("left");    //undefined

}

JAVASCRIPT LOGICAL OPERATORS
-----------------
&&
||
!

JAVASCRIPT FUNCTIONS
-----------------
var a = function name() {}
function name() {}
return


<!-- () => (new in ECMAScript 6) -->   //fat arrow or arrow functions
{
    function add(a,b) { //en vez de estar haciendo una y otra y otra funcion
        return a + b;
    }

    const add = (a, b) => a + b; //podemos hacer simplemente una arrow function
    const add = (a, b) => {  //incluso lo podemos hacer con return, esto es lo mismo
        return a + b;
    }
}





JAVASCRIPT DATA STRUCTURES
-----------------
Array
Object

JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) 


JAVASCRIPT KEYWORDS
-----------------
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield




