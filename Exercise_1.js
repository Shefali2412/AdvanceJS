// Exercise 1

//let user = {
// name: "John",
//    years: 30
 // }

  // Destructuring Assignment
  //name property into the variable name.
  //years property into the variable age.
  //isAdmin property into the variable isAdmin (false if absent)

  // solution:
  let {name ,years: age ,isAdmin = false} = user;  

  console.log(name);
  console.log(age);
  console.log(isAdmin);

  // Exercise 2
  //Give the right name:
  //Create the variable with the name of our planet. How would you name such a variable?
  //Create the variable to store the name of the current visitor. How would you name that variable?

  // solution:
  let planetName = 'Earth';
  let currentVisitor = 'Alvin';

  console.log(planetName);
  console.log(currentVisitor);

  // Exercise 3
  //Look at the code. What will be result of the call at the last line and why?


  let phrase = "Hello"

   if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
   }

  //sayHi() // solution : it will give refrence error beacause user variable is declared inside if statement which is in local scope 
          // but can access phrase which is in global scope 

  // Exercise 4
  
  // Write the code, one line for each action:

// 1. Create an empty object user.
// 2. Add the property name with the value John.
// 3. Add the property surname with the value Smith.
// 4. Change the value of the name to Pete.
// 5. Remove the property name from the object.

// solution:
  let users = {};
  users.name = 'john';
  users.surname = 'Smith';
  users.name = 'Pete';
  delete users.name;  
  console.log(users);

  // Exercise 5

  //Is it possible to change an object declared with const, how do you think and why?
  
  const user = {
    name: "John"
  }
  
  // does it work?
  user.name = "Pete"

// solution : we cannot change or reassign the object with const but here we are not changing object instead changing property of object which is possible .
//            so, above code will work.


// Exercise 6

// We have an object storing salaries of our team:
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }
let sum = 0;
for(let a in salaries){
    sum = sum + salaries[a] ;

}
console.log(sum);



// Exercise 7
//Rewrite this if using the ternary operator '?':

//if (a + b < 4) {
 // result = 'Below';
//} else {
//  result = 'Over';
//}

// Solution:

let result = (a+b<4) ? 'Below' : 'Over'; // for condition use (condition)

 // Exercise 8
 //Rewrite if..else using multiple ternary operators '?'.

 //let message;

//if (login == 'Employee') {
//  message = 'Hello';
//} else if (login == 'Director') {
 // message = 'Greetings';
//} else if (login == '') {
// message = 'No login';
// } else {
// message = '';
// }

// solution:
 
let message = (login == 'Employee') ? 'Hello' : 
                (login == 'Director') ? 'Greetings' :  
                   (login == '') ?  'No login' : '';

  