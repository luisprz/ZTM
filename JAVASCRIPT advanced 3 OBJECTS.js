

////////////////////////////////////////////// ------------  ADVANCED OBJECTS ------------- ///////////////////////////////////////////////

import { copyFile } from "fs";

///  Reference Type
///  Context
///  Instantiation

////////////////////////////////////////////// ------------  REFERENCE TYPE ------------- ///////////////////////////////////////////////

var object1 = { value: 10};
var object2 = object1; //como aqui estoy igualando una variable a la otra las igualo por que el mismo puntero apunta a los 2 espacios de memoria lo cual da lo mismo uno que el otro
var object3 = { value: 10 }; //a pesar de que objecto 1 y 3 tienen los mismos valores, estan en cajas diferentes o sea en espacio de memoria diferente por ende 1 === 3 es falso

//primitive types are those defined by the one who wrote javascript or the ones from ecmascript
//it includes number 1, null, true, " strings ", undefined, false, etc.

//but now, a "reference type" wich is non primitive type are those not defined by the programming languages. They are created by the programmer
//example var number1 = 1 its primitive because js knows what it is.
//var object1 = { value: 10 }; its non primitive because it is a reference to a memory space. thats where reference type name comes.



////////////// ------------  CONTEXT and CONTEXT VS SCOPE ------------- ///////////////////////////////////////////////


//mientras que el scope reside dentro de curly brackets { scope is defined by curly brackets }
//context tells you where you are within the object.
//ej:
console.log(this); //esto imprimira el window object por que es el root path. como no hay mas nada this hace referencia al root path
console.log(this === window); //esto da true porque this esta haciendo referencia a window dado que no hay mas nada y this no esta dentro de ningun hijo del root path window
this.alert("hello"); //esto funciona exactamente igual que window.alert por que this esta haciendo referencia al window
//this es como lo que va antes del punto o sea el objeto padre
ej:
const object4 = {
    a: function() {
        console.log(this);
    }
}//-- aqui podemos observar que this imprimira {a: f} o sea va a imprimir lo que tiene contenido el object4 por que ahora this es el object4. por ende imprime su propio contenido
//(this es importante para especialmente instantiation por que lo hace mas facil)



////////////////////////////////////////////// ------------  INSTANTIATION ------------- ///////////////////////////////////////////////


//Instantiation is when you make a copy of an object and reuse the code
//to make instances or multiple copies of an aobject
//its a syntex and we need to get used to it

class Player {
    constructor(name, type) {
        console.log('Player', this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, and I'm a ${this.type}`);
    }
} 

class Wizard extends Player {
    constructor(name, type) {
        super(name, type) 
        console.log('Wizard', this)
    }
    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shown', 'Defender');

//explicacion:
/* primero se crea un wizard1, la palabra new se utiliza cada vez que se va a hacer una copia de un objeto. una instancia de wizard. a new copy of object wizard. its an instance. 
luego Wizard es una clase (los nombre de clases son la unica cosa que comienza mayuscula W) que sale o se extiende de su clase padre (Player)
dentro de la clase Wizard se encuentra el constructor que hace las copias del objecto con parametros name y type
luego esta el super que no es mas que el constructor del constructor es decir el constructor de la clase padre (Player) o sea un super constructor al llegar aqui el lo que hace es correr el constructor de la clase padre Player
super va Player introduce los atributos en los parametros y corre el console.log donde this sera lo que contiene player o sea wizard porque this es el objecto padre player. luego corre la funcion introduce
hay que decir que super debe lococarse antes de utilizar this y para obtener this.type puesto que Wizard extiende de algo y ese algo debe llevar un super constructor ese algo es Player el cual tiene la definicion de this.type y para This en este caso siendo Wizard es necesario que super este tambien porque es sintaxis
y luego corre el console.log de wizard donde aqui el this a imprimir arrojara lo que tiene contenido Wizard puesto que this es el objecto wizard en este caso arrojara shelly healer si corriste el wizard1
tambien puedes hacer wizard1.play() o wizard2.introduce() para correr las funciones pasandole los atributos de dichas nuevas copias del objeto wizard
 */
//esto ers ahora con ES6 pero antes de esto se utilizaba clasical inheritance donde no se usaba super y se usaba prototype (player.prototype.introduce)