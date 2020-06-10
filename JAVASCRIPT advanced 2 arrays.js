

////////////////////////////////////////////// ------------  ADVANCED ARRAYS ------------- ///////////////////////////////////////////////




///////////////////////////////////////////////// ------------  FOREACH ------------- ///////////////////////////////////////////////


//var array = [1, 2 , 10, 16]; //thats an array and we can do for loops or forEAch with ECMAscript6
const array = [1, 2 , 10, 16]; //es6 syntax
const array2 = [];
const newArray = array.forEach((num) => {
    array2.push(num * 2);
})
console.log('forEach',array2);
//ojo con for ni con forEach necesitas retornar nada. For just loops over the array and make what function says.

//========================================================================================================================================

// we are going to talk about map, filter and reduce

///////////////////////////////////////////////// ------------  MAP ------------- ///////////////////////////////////////////////

//const array = [1, 2 , 10, 16]; //es6 syntax
const mapArray = array.map((num) => {
    return num * 2;
})
console.log('map', array2);

//const mapArray = array.map(num => num * 2); //mapArray simplified. short form
//esta funcion se lee -> en el arreglo array con la funcion map voy a tomar cada uno de los numeros del arreglo inicial array y voy a devolver el mismo numero multiplicado por 2 y lo guardare en el nuevo arreglo que se crea con el mismo nombre de la funcion mapArray
//map works like foreach loop, iterating each index and doing the action of multiply each one but saving the values in a new array called mapArray
//instead of for loops, map returns something, in that case it returns a new array multiplied by 2 in each index
//the fact of being using return avoids the side effects produced in for loops.
//another important thing is that we dont change the initial array, we work over a copy with map


///////////////////////////////////////////////// ------------  Filter ------------- ///////////////////////////////////////////////

const filterArray = array.filter((num) => {
    return num > 5;
})
/////const filterArray = array.filter(num => num > 5); //short form of filter array
//the way it reads -> filter the "arrayname = array" looking for a number greater than 5
//and iterating all numbers in array add those you find to a new array called same as function (filterArray).
//you can put any filtering condition. if it returns true then the value goes to the new array.
console.log('filter', filterArray);


///////////////////////////////////////////////// ------------  REDUCE   ------------- ///////////////////////////////////////////////

/* 
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0) */
const reduceArrayShortForm = array.reduce((acc, num) => acc + num, 0)
console.log ('reduce', reduceArrayShortForm);
//with reduce you can also do map or even filter!
//this function what does is iterates every element of {"arrayName = array"} wich it takes as num
//then it sums the number where it is with the accumulator wich can be the number of the before index.
//the last parameter after the function is the accumulator with if 0 then it will start with 0
//for this function first iterating element is 1 then 1 + acc(is 0) === 1, 2 + acc(is 1 now) === 3, 10 + acc(is 3) === 13, 16 + acc(is 13 now) === 29











///////////////////////////////////////////////// ------------  EXCERCISES  ------------- ///////////////////////////////////////////////


// Complete the below questions using this array:
const array = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},

];


//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);


//array.forEach(user => {let{ username } = user; username = username + "!"; newArray.push(username);}) 

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);


// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!";
	});
	return user;
})
console.log(answer);

