//MINI FACEBOOK
//Arrays and objects

var database = [//array
    { //object
        username: "Luis",
        password: "1234"
    },
    { //object
        username: "Rafael",
        password: "1234"
    },
    { //object
        username: "Alexandra",
        password: "guay"
    }
];

var newsfeed = [
    {
        username: "Luis",
        timeline: "Hey"
    },
    {
        username: "Pablo",
        timeline: "Hola"
    },
    {
        username: "Amanda",
        timeline: "Bonjour"
    }
];

var userNamePrompt = prompt("Please put Username");
var passwordPrompt = prompt("Please put Password");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        } 
    }
    return false;
}


function signIn(user, pass) {
    if (isUserValid(user, pass)){
        console.log(newsfeed);
    } else { 
        alert("Sorry check your password or username");
    }
}
signIn(userNamePrompt, passwordPrompt);


//////////////////////////////////////////  LOOPS ////////////////////////////////////////////////////////////


// ARRAY FOR LOOPS
var todos = [
    "cosa 1",
    "cosa 2",
    "cosa 3"
];
var todos2 = [
    "cosa 4",
    "cosa 5",
    "cosa 6"
];

//FOR LOOP WITH POP
/* todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
    todos.pop();
}
 */

//FOR LOOP WITH console log
/* todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
    console.log("index1: " + i + " -> " + todos[i] );
} */

//FOR EACH LOOP ADDED IN ECMASCRIPT 5
/* todos.forEach(function(laVainaCompleta, elIndice) {  
    console.log("index2:", elIndice, "->",laVainaCompleta); 
}); */

//THE BEAUTY OF HABILITY TO REUSE  FOREACH
/* function functionName(laVainaCompleta, elIndice) {  
    console.log("index3:", elIndice, "->",laVainaCompleta); 
}
todos.forEach(functionName);
todos2.forEach(functionName); */

//WHILE LOOP
/* var countingUpTo = 10;
while (countingUpTo > 0) {
    console.log(countingUpTo);
    countingUpTo--;
}
 */

//DO WHILE LOOP
/* var countingUpTo = 10;
do {
    console.log(countingUpTo);
    countingUpTo--;
} while (countingUpTo > 0);
 */

