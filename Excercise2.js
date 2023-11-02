// Exercise 1

/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array. For instance:

*/

//Solution:

const filterRange = (arr, a, b) => arr.filter(element => element >= a && element <= b);
    

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1 , 4);

console.log(filtered);
console.log(arr);

// Exercises 2

/*You have an array of user objects, each one has user.name. 
Write the code that converts it into an array of names.

 */

//solution:

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 29 }

let users = [ john, pete, mary ]

let names = users.map(user => user.name);
console.log(names);


// Exercises 3

/* Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:*/

//solution: 

/*let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }*/

let arr1 = [ john, pete, mary ]
const getAverageAge = (users) => {
    if (users.length === 0){
        return 0;
    }
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge/users.length;
}

console.log(getAverageAge(arr1));

