RULES FOR DEVELOPERS 

1 DRY === Dont Repeat Yourself o sea en vez de repetir una variable para hacer algo parecido, tener una variable general que la llames introduciendole los valores respectivos cada vez
        {{   ej 

            function sing1() {
                console.log("dooooo");
            }
            sing1();

            function sing2() {
                console.log("reeeee");
            }
            sing2();

            function sing(song) {
                console.log(song);
            }
            sing("doooo");
            sing("reeeee");

            OJOO: (song) es parametro mientras dooo y reee son argumentos.
        }}


2 Separation of concerns / Separación de intereses

    { 
        quiere decir que todo lo de html debe ir en el archivo.html, todo lo de css en css, todo lo de JS en js, etc.no los ligues 
    }

3 Hacer eficiente y rapido el software
    {
        -tomar en cuenta: location of server, how many trips and size of Files
    }


4 avoid side effects and functional purity (be deterministic) === you want to keep things acting in an expected way
    {
        cada funcion debe ser un universo donde lo que pasa dentro no debe saberlo mas nadie fuera. y dentro solo el child debe conocer las variables del parent.
        Tambien una function debe devolver un valor concreto undefined debe evitarse siempre (es preferible null) 
        el proceso de una funcion es que  input -> function -> value  you need to avoid side effects.
        ej:
        a = 1;
        var function x() = {
            a = 2;
        }
            //aqui estamos cambiando el outside world, esto es un side efect, una variable afuera del scope de la funcion no puede cambiar por una accion que se produjo dentro
        //What are the two elements of a pure function?
        . Deterministic --> always produces the same results given the same inputs
        . No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
    }

5 Break big things into little things

6 Update your packages and everything to be up to date with vulnerability issues. https://semver.npmjs.com/

7 Divide things in components! 
    {
    Components:
        - Atoms(icons and little small indivisible elements on your website such as images, tags)
        - Molecules(combine atoms that have similar functionality such as the navigation bar)
        - Organisms(molecules that combines to a bigger scale functionality)
        - Templates(the combination of organisms to give you an idea of how your app or website should look)!
        - Pages(the page of your app!) 

    }

8 Minimize the amount of DOM Manipulations because web browsers have a hard time to achieve that reducing performance!.