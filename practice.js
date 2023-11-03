//  Exercise 1

//  The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

// JAVASCRIPT
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }
// Rewrite it, to perform the same, but without if...else, and using arrow function. 

// // solution:

 let checkAge = age => (age > 18) ? true : confirm('Do you have your parents permission to access this page?');

 let myAge = 25;
 console.log(checkAge(myAge));


//  Exercise 2

//  Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// JAVASCRIPT
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S. In this task the function should support only natural values of n: integers up from 1.

//  

// //solution:

 let pow = (x,n) => n<1 ? "It should be a natural number (n >= 1)" : n**x;

 console.log(pow(3, 2)); 
 console.log(pow(5,5));
 console.log(pow(5,-2));

 // Exercise 3

// Replace Function Expressions with arrow functions in the code:

// JAVASCRIPT
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )


// solution:

 let ask = (question, yes, no) => confirm(question) ? yes() : no(); // for single line no curly braces

  ask(
         "Do you agree?",
     () => alert("You agreed."),
    () => alert("You canceled the execution.")
    
  ); 

 
//   Exercise 4

//  Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// // solution :

let calculator = {
  read() {
    this.value1 = prompt('Enter the first value:');
    this.value2 = prompt('Enter the second value:');
  },
  sum() {
    return this.value1 + this.value2;
  },
  mul() {
    return this.value1 * this.value2;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// Another way
    
  // let calculator = {
  //   a: 0,
  //   b: 0,
  //   read(num1, num2){
  //       this.a = num1;
  //       this.b = num2;
  //   },

  //   sum() {
  //       return this.a + this.b;
  //     },

  //     mul() {
  //       return this.a * this.b;
  //     }
  //   }
  // calculator.read(2,4);
  // console.log(calculator.mul());
  // alert( calculator.mul() ); 


  // Exercise 5

  /* Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?*/

  let min = (a,b) => a<b ? a : b;
  
  console.log(min(10, 20));


  
