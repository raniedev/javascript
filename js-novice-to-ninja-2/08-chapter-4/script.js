//Functions
//A function is a chunk of code that can be referenced by a name, and is almost like a small, self-contained mini program. Functions can help reduce repetition and make code easier to follow.

//Defining a function literal
//Function declaration 
function hello(){
    console.log("Hello World!");
}

//Function expressions
const goodbye = function(){
    console.log("Goodbye World!");
};

//The function in this example is known as an anonymous function because it doesn't have a name; it is simply created, then assigned to the variable goodbye. Alternatively, we can create a named function expression instead:

const goodbye2 = function bye(){
    console.log("Goodbye World!");
};

//Every function has a name
//All functions have a read-only property called name, which can be acessed like so:
console.log("hello.name -> " + hello.name);
console.log("goodbye.name -> " + goodbye.name);
console.log("goodbye2.name -> " + goodbye2.name);

/*
Anonymous functions have an empty string as their name property in most browsers, although some versions of Internet Explorer use undefined.

The name property can be useful when debugging code, as the name of a function will be used to indicate which functions are causing a problem.
*/

//function() Constructors
const hi = new Function("console.log('Hi World!');");
console.log(hi);
console.log("hi.name -> " + hi.name);

//A ninja programmer should always declare functions using function literals, function declarations or function expressions. 

//Whether you use function declarations or function expressions is often a matter of personal taste, but whatever you choose to do, be consistent!


//Invoking a function
hello();

//Keep Your Code DRY
//Don’t Repeat Yourself, or DRY, is a principle of programming that specifies that every part of a program should only be written once. This avoids duplication and means there’s no need to keep multiple pieces of code up to date and in sync.

//If you have assigned a function to a variable, you need to place parentheses after the variable to invoke it as a function:
goodbye();

//Remember: you need parentheses to invoke a function ― either by name or by reference to the variable it is assigned to. If you skip the parentheses, you are simply referencing the function itself rather than invoking it, as you can see here:

console.log(goodbye);

//All that has been returned is the function definition that the variable goodbye is pointing to, rather than running the code. This can be useful if you want to assign the function to another variable, like so:

seeya = goodbye;

seeya();
console.log(seeya);


//Return values
//All functions return a value, which can be specified using the return statement, which comes after the return keyword. A function that doesn’t explicitly return anything (such as all the examples we have seen so far) will return undefined by default.

function howdy(){
    return "Howdy World!";
}

//This means we can now assign a function invocation to a variable, and the value of that variable will be the return value of that function:
const message = howdy();


//Parameters and arguments
//Parameters and arguments are terms that are often used interchangeably to represent values provided for the function as an input. 

function square(x){
    return x * x;
}

console.log("square(4.5) -> " + square(4.5));

//You can use as many parameters as you like

function mean(a, b, c){
    return (a + b + c)/3;
}

console.log("mean(1, 3, 6) -> " + mean(1, 3, 6));

//d. If we try to invoke the mean function with only two arguments, we can see that it returns NaN because the function cannot do the required operation with undefined:
console.log("mean(1, 2) -> " + mean(1, 2));

//If too many arguments are provided when a function is invoked, the function will work as normal and the extra arguments will be ignored

console.log("mean(1, 2, 3, 4, 5) -> " + mean(1, 2, 3, 4, 5));

//Variable numbers of arguments
//We could improve our mean() function by allowing a user to calculate the mean of any number of values, rather than restricting them to just 3.

//Every function has a special variable called arguments. This is an array-like object that contains every argument passed to the function when it is invoked. We can create a simple function called arguments() that will return the arguments object so we can see what it contains:

function arguments(){
    return arguments;
}

console.log(arguments('hello', NaN));
console.log(arguments(1, 2, 3, 4, 5));

/*
As you can see, the arguments object that is returned contains every value that was entered. These can then be accessed using an index 
notation like we did with arrays, so the first argument would be accessed using arguments[0].

The problem is that arguments is not an array. It has a length property and you can read and write each element using index notation, but it 
doesn’t have array methods such as slice(), join(), and forEach().

A much better option is to use the rest operator. This was introduced in ES6 and can be used to deal with multiple arguments by creating an 
array of arguments that are available inside the body of the function.

To use the rest operator, simply place three dots in front of the last parameter in a function declaration. This will then collect all the 
arguments entered into an array. For example, the following function will have access to an array of all the arguments entered:
*/

function rest(...args){
    return args;
}

console.log(rest('text', 32, true, 1.5, null, undefined, [1, 2, 3]));

function rest2(...args){
    for(arg of args){
        console.log(arg);
    }
}

rest2(true, 1, 'a', null, undefined, ['b', 2, false]);

//Improved mean function
//We can use a rest parameter to improve our mean() function so it accepts any number of values:

function mean(...values){
    let total = 0;
    for(const value of values){
        total += value;
    }
    return total/values.length;
}

console.log(mean(5, 45, 90, 25, 165));


//Default Parameters
//These are values that will be used by the function if no arguments are provided when it is invoked.
function hello2(name='World'){
    console.log(`Hello ${name}!`);
}

hello2();
hello2('Universe');

//Default parameters should always come after non-default parameters, otherwise default values will always have to be entered anyway.
function discount(price, amount=10){
    return price * (100 - amount)/100;
}

//This function takes two arguments: the price of an item and the percentage discount to be applied. The store’s most common discount is 10%, so this is provided as a default value. This means that the amount argument can be omitted in most cases and a 10% discount will still be applied:

console.log("$200 - default (10%) -> " + discount(200));
console.log("$200 - 30% -> " + discount(200, 30));

//This will fail to work, however, if the parameters are reversed
function discount2(amount=10, price) {
    return price*(100-amount)/100;
}

console.log("default % of $500 -> " + discount2(500));
console.log("20% of $500 -> " + discount2(20, 500));

// The golden rule to remember here is to always put default parameters after all the other parameters.


//Arrow Function
/*
Arrow functions can be identified by the arrow symbol, => that gives them their name. The parameters come before the arrow and the main body of 
the function comes after. Arrow functions are always anonymous, so if you want to refer to them, you must assign them to a variable. For 
example, the square function we wrote earlier can be written like so:
*/
const square2 = x => x * x;

/*
Arrow functions have a number of advantages over other ways of declaring functions:
> They are much less verbose than normal function declarations.
> Single parameters don’t need putting into parentheses.
> The body of the function doesn’t need placing inside a block if it’s only one line.
> The return keyword isn’t required if the return statement is the only statement in the body of the function.
> They don’t bind their own value of this to the function.
*/
const add = (x, y) => x + y;
console.log(add(3, 5));

//If the function doesn’t require any parameters, a pair of empty parentheses must go before the arrow:
const hello3 = () => console.log("Hello World 3!");

hello3();

/*
In all the examples, the main body of the function fits onto one line, so there is no need to put it inside a block or explicitly use the return keyword.
Longer functions will still require curly braces to deliminate the body of the function and the return keyword at the end, as can be seen in this (rather simplistic) tax-calculating function:
*/

const tax = (salary) => {
    let taxable = salary - 8000;
    const lowerRate = 0.25 * taxable;
    taxable = taxable - 20000;
    const higherRate = 0.4 * taxable;
    return lowerRate + higherRate;
}

console.log(tax(21000));


//Function Hoisting
//Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations to the top of the current scope, regardless of where they are defined.
//Functions that are defined using a function declaration are automatically hoisted, meaning they can be invoked before they have been defined. For example, in the following code the function hoist() can be invoked before it is actually defined:
hoist();

// ...
// ...
// ...
// ...
// ...

//function definition is at the end of the code
function hoist(){
    console.log("Hoist me!");
}

//This can be quite useful as it means that all function definitions can be placed together, possibly at the end of a program, rather than having to define every function before it is used.


//Variable Hoisting
//Variable declarations that use the var keyword are automatically moved to the top of the current scope. 
//Variable assignment is not hoisted, however. This means that a variable assigned at the end of a function will have a value of undefined until the assignment is made:
console.log(name);
var name = "Denise";
console.log(name);

//It’s better practice to use const and let to declare any variables at the beginning of a block so hoisting is unnecessary.

/*
A function expression (where an anonymous function is assigned to a variable) is hoisted in a similar way to variables. So if it is declared 
using var then the declaration will be hoisted, but not the actual function. This means the function cannot be invoked until after it appears in the code:
*/

//helloExpression(); //throws a error
helloDeclaration();
var helloExpression = function(){
    console.log("hello-expression");
}
function helloDeclaration(){
    console.log("hello-declaration");
}
// The function expression can only be invoked after
helloExpression();

//This is the major difference between the two ways of defining function literals and it may influence your decision regarding which one to
//use. Some people like that using function expressions means you’re required to define all functions and assign them to variables prior to using them.

//Callbacks
//Functions can also be given as a parameter to another function. A function that is passed as an argument to another is known as a callback.

/*
function sing(song){
    console.log(`I'm singing along to ${song}.`);
}
*/

function sing(song, callback){
    console.log(`I'm singing along to ${song}.`);
    if(typeof(callback) === 'function'){
        callback();
    }
}

function dance(){
    console.log("I'm moving my body to the groove.");
}

sing('Let it Go', dance);

//A function can also take an anonymous function as a callback.
sing('Let it Go', ()=>{console.log("I'm standing on my head.")});

/*
This is only really useful for one-off tasks. It’s often a better idea to keep functions separate and named, so they can be reused. It’s also a 
bad idea to use this method for long function definitions as it can be confusing where the callback starts and ends. Named functions also make 
it easier to identify the source of bugs in code. In this case, the fact we only needed a one-line anonymous function made it a good candidate 
for using the arrow notation.
*/

//Sorting arrays with a callback
//In the last chapter we saw that arrays have a sort() method that sorted the items in the array into alphabetical order. This is fine for 
//strings, but you might recall that it didn’t work so well for numbers:

console.log([1, 3, 12, 5, 23, 18, 7].sort()); //The reason for this is that the numbers are converted into strings and then placed in alphabetical order.

function numerically(a, b){
    return a - b;
}

/*
This simply subtracts the two numbers that are being compared, giving a result that is either negative (if b is bigger than a), zero (if a and b are the same value), or positive (if a is bigger than b).
This function can now be used as a callback in the sort() method to sort the array of numbers correctly:
*/
console.log([1, 3, 12, 5, 23, 18, 7].sort(numerically));

/* 
Overflow Errors
In some rare instances where an array includes some very large and negative numbers, an overflow error can occur and the result of a-b becomes 
smaller than the smallest number that JavaScript is able to cope with. If this is the case, the following function can be used as a callback instead:

function numerically (a,b) {
    if (a < b) {
        return -1;
    } else if (a> b) {
        return 1;
    } else {
        return 0;
    }
}
*/

//Array Interators
//Arrays have a number of methods that utilize callbacks to make them more flexible
//An alternative for() method way is the forEach() method
//forEach()
/*
This will loop through the array and invoke a callback function using each value as an argument. The callback function takes three parameters, 
the first represents the value in the array, the second represents the current index and the third represent the array that the callback is 
being called on. The example above could be written as:
*/
const colors = ['Green', 'Yellow', 'Blue', 'Purple', 'Grey'];

colors.forEach((color, index) => console.log(`Color at position ${index} is ${color}.`));

/*
map()
The map() method is very similar to the forEach() method. It also iterates over an array, and takes a callback function as a parameter that is 
invoked on each item in the array. This is often used to process data returned from databases in array form, such as adding HTML tags to plain 
text. The difference is that it returns a new array that replaces each value with the return value of the callback function. For example, we 
can square every number in an array using the square function we wrote previously as a callback to the map() method:
*/
console.log([1, 2, 3].map(square));
console.log([1, 2, 3].map(x => 2 * x));

//The next example takes each item in the array and places them in uppercase inside paragraph HTML tags:
console.log(['Green', 'Yellow', 'Blue'].map(color => `<p>${color.toUpperCase()}</p>`));

console.log(['Green', 'Yellow', 'Blue'].map((color, index, array) => `Element ${index} is ${color}. There are ${array.length} items in total.`));

/*
Reduce()
The reduce() method is another method that iterates over each value in the array, but this time it cumulatively combines each result to return 
just a single value. The callback function is used to describe how to combine each value of the array with the running total. This is often 
used to calculate statistics such as averages from data stored in an array. It usually takes two parameters. The first parameter represents the 
accumulated value of all the calculations so far, and the second parameter represents the current value in the array. The following example 
shows how to sum an array of numbers:
*/
console.log([1, 2, 3, 4, 5].reduce((acc, val) => acc + val));

/*
In the example above, value of acc starts as 1 (the first item in the array) then keeps track of the accumulated total. The next item in the 
array is then added to this running total, and so on, until every item in the array has been added together and the result is returned.

The reduce() method also takes a second parameter after the callback, which is the initial value of the accumulator, acc. For example, we could 
total thenumbers in an array, but starting at 10, instead of zero:
*/
console.log([1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 10));

//Another example could be to calculate the average word length in a sentence:
const sentence = "The quick brown fox jumped over the lazy dog";
const words = sentence.split(" ");
console.log(words);

//Now we can use the reduce() function to calculate the total number of letters in the sentence, by starting the count at 0 and adding on the length of each word in each step:
const total = words.reduce((acc, word) => acc + word.length, 0);
console.log(total);

//And a simple division sum tells us the average word length:
const average = total/words.length;
console.log(average);


//Filter
//The filter() method returns a new array that only contains items from the original array that return true when passed to the callback. For example, we can filter an array of numbers to just the even numbers using the following code:
const numbers = [2, 7, 6, 5, 11, 23, 12];
console.log(numbers);
console.log(numbers.filter(x => x % 2 === 0));

//The filter() method provides a useful way of finding all the truthy values from an array:
const array = [ 0, 1, '0', false, true, 'hello' ];
console.log(array.filter(Boolean));

//This uses the fact that the Boolean() function will return the boolean representation of a value, so only truthy values will return true and be returned by the filter() method.
//To find all the falsy values, the following filter can be used:
console.log(array.filter(x => !x));

/*
This uses the not operator, ! to return the compliment of a value’s boolean representation. This means that any falsy values will return true 
and be returned by the filter.
There are other array methods that use callbacks that are worth investigating such as reduceRight(), every(), find() and some().
*/
