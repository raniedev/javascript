//Array
const myArray = [];

//Constructor
const myArray2 = new Array();

//Both of these produce an empty array object, but it’s preferable to stick to using array literals because of a variety of reasons ... and they require less typing!

console.log("typeof [] -> " + typeof []);

//Initializing an Array
const heroes = [];
console.log("heroes -> " + heroes);
console.log("heroes[0] -> " + heroes[0]);

//Adding values to arrays
heroes[0] = 'Superman';
console.log("heroes[0] = 'Superman'");
console.log("heroes -> " + heroes);
console.log("heroes[0] = 'Batman'\nheroes[1] = 'Wonder Woman'\nheroes[2] = 'Flash'\nheroes[5] = 'Aquaman'");
heroes[0] = 'Batman'; heroes[1] = 'Wonder Woman'; heroes[2] = 'Flash'; heroes[5] = 'Aquaman'; 
console.log("heroes -> " + heroes);

//Creating Array Literals
let avengers = ['Captain America', 'Iron Maiden', 'Thor', 'Hulk'];
const mixedArray = [null, 1, [], 'two', true];
console.log("avengers -> " + avengers);

//Removing Values from Arrays
console.log("delete avengers[3] -> " + delete avengers[3]);
console.log("avengers -> " + avengers);
console.log("avengers[3] -> " + avengers[3]);

//Destructiring Arrays
// Destructuring an array is the concept of taking values out of an array and presenting them as individual values.

let [x, y] = [1, 2];
console.log("[x, y] = [1, 2]");

//Destructuring also gives us a neat way of swapping the value of two variables over:
console.log(`x -> ${x} y -> ${y}`);
[x ,y] = [y, x];
console.log("[x, y] = [y, x]");
console.log(`x -> ${x} y -> ${y}`);

/*
Before ES6, a temporary variable would have to be used to achieve the same result:
const temp = x;
x = y;
y = temp;
*/

avengers = ['Captain America', 'Iron Maiden', 'Thor', 'Hulk', 'Haweye', 'Black Widow'];
//Array Properties and Methods
console.log("avengers -> " + avengers);
console.log("avengers.length -> " + avengers.length);

console.log("avengers[length - 1] -> " + avengers[avengers.length - 1]);

//The length property's mutable, meaning you can manually change it:
avengers.length = 8;
console.log("avengers.length -> " + avengers.length);
console.log("avengers -> " + avengers);

//As you can see, if you make the array longer, the extra slots will be filled in with undefined:
avengers.length = 3;
console.log("avengers.length = 3");
console.log("avengers.length -> " + avengers.length);
console.log("avengers -> " + avengers);

//If you make the array shorter than it already is, all the extra elements will be removed completely.



//Pop, Push, Shift, and Unshift
//Pop: To remove the last item
console.log("avengers.pop()");
avengers.pop();
console.log("avengers -> " + avengers);

//Shift: To remove the first item
console.log("avengers.shift()");
avengers.shift();
console.log("avengers -> " + avengers);

//Push: Appends a new value to the end of the array
console.log("avengers.push('Thor')");
avengers.push('Thor');
console.log("avengers -> " + avengers);

//Unshift: Appends a new item to the beginning of the array
console.log("avengers.unshift('Captain America')");
avengers.unshift('Captain America');
console.log("avengers -> " + avengers);



//Merging Arrays
//The concact() method can be used to merge an array with one or more arrays
avengers = avengers.concat(['Hulk', 'Hawkeye', 'Black Widow']);
console.log("avengers.concat(['Hulk', 'Hawkeye', 'Black Widow'])");
console.log("avengers -> " + avengers);

//Alternative way
animes = ['Steins;Gate', 'Saint Seiya', 'Claymore'];
console.log("animes -> " + animes);
console.log("animes = [...animes, ...['Naruto', 'Bleach', 'Dragon Ball Z']]");
animes = [...animes, ...['Naruto', 'Bleach', 'Dragon Ball Z']]
console.log("animes -> " + animes);

//The join() method
//The join() method can be used to turn the array into a string that comprises all the items in the array, separated by commas:
console.log("animes.join() -> " + animes.join());

//You can choose a separator
console.log("animes.join() -> " + animes.join(' 🞂 '));


//Slicing and Splicing
//The slice() method creates a subarray
console.log("animes.slice(2,4) -> " + animes.slice(2,4));

//The splice() method removes items from an array then inserts new items in their place
console.log("animes -> " + animes);
console.log("animes.splice(3, 1, 'Gintama')");
// The first number in the parentheses tells us the index at which ti start the splice.
// The second number tells us how many items to remove from the array.
// Every value after this is then inserted into the array in the same place the other items were removed.
animes.splice(3, 1, 'Gintama'); 
console.log("animes -> " + animes);

//The splice() method can also be used to insert values into an array at a specific index without removing any items, indicating that zero items are to be removed
animes.splice(4, 0, 'Death Note');
console.log("animes.splice(4, 0, 'Death Note') -> " + animes);
//[ALERT]: Be careful, though, as splice() is a destructive method which means it changes the array permanently


//We saw earlier that we can use the delete operator to remove an item from an array. Unfortunately, this leaves a value of undefined in its place. If you want to remove a value completely, you can use the splice() method with a length of 1 and without specifying any values to add:
console.log("animes -> " + animes);
console.log(animes.splice(4, 1));// will remove the item at index 4
console.log("animes.splice(4, 1)");
console.log(animes);


//Reverse
//We can reverse the order of an array using the reverse() method
console.log("animes.reverse() -> " + animes.reverse());

//Sort
//We can sort the order of an array using the sort() method
console.log("animes.sort() -> " + animes.sort());


//It is alphabetical order by default for String objects. Note that this also changes the order of the array permanently
console.log(animes);


//Numbers are also sorted alphabetically (that is, by their digit, rather than numerically), so 9 will come after 10 when you try to sort an array of numbers
console.log([5, 9, 10].sort()); //This ca be fixed using a callback


//Finding if a value is in an array
console.log("animes.indexOf('Saint Seiya') -> " + animes.indexOf('Saint Seiya'));
console.log("animes[4] -> " + animes[4]);
//If the item is not in the array, it will return -1
console.log("animes.indexOf('Chrono Crusade') -> " + animes.indexOf('Chrono Crusade'));

//includes() method returns a boolean value depending on whether the array contains a particular element or not
console.log("animes.includes('Steins;Gate') -> " + animes.includes('Steins;Gate'));
console.log("animes.includes('Yu-gi-oh!') -> " + animes.includes('Yu-gi-oh!'));

//You can add an extra parameter to indicate which index to start the search from
console.log("animes.includes('Bleach', 1) -> " + animes.includes('Bleach', 1) + ", animes[0] -> " + animes[0]);


//Multidimensional Arrays
//You can even have an array of arrays, known as a multidimensional array. This could be used to create a coordinate system
const coordinates = [[1,3],[4,2]];

//To access the values in a multidimensional array, we use two indices: one to refer to the item's place in the outer array, an one to refer to its place in the inner array
console.log(coordinates);
console.log("coordinates[0][0] -> " + coordinates[0][0]);
console.log("coordinates[1][0] -> " + coordinates[1][0]);
console.log("coordinates[0][1] -> " + coordinates[0][1]);
console.log("coordinates[1][1] -> " + coordinates[1][1]);

const summer = ['Jun', 'Jul', 'Aug'];
console.log(summer);
const winter = ['Dec', 'Jan', 'Feb'];
console.log(winter);
const nested = [summer, winter];
console.log(nested);
const flat = [...summer, ...winter];
console.log(flat);




//Sets
//A set is a data structure that represents a collection of unique values, so it cannot include any duplicate values.

//Creating sets
const list = new Set();

//Adding values to sets
console.log("list.add(1) -> " + list.add(1));
console.log(list);
list.add(2).add(3).add(4);
console.log("list.add(2).add(3).add(4)");
console.log(list);

const numbers = new Set([1,2,3]);
const moreNumbers = new Set([7,7,7,7,7,8,8,8,9,9]);
console.log(moreNumbers);

//If a string is used as the argument then each character will be added as a separate element, with any repeated characters ignored
const letters = new Set('hello');
console.log(letters);

//If you want to add separate words, you need to use the add() method
const words = new Set().add('the').add('quick').add('brown').add('fox');
console.log(words);

const arrays = new Set().add([1]).add([1]);
console.log(arrays);

console.log([1] === [1]);

const mixedTypes = new Set().add(2).add('2');
console.log(mixedTypes);


//Set Methods
const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla);
console.log(jla.size);

//has()
//The has() method can be used to check if a value is in a set. This returns a boolean value of true or false:

console.log("jla.has('Superman') -> " + jla.has('Superman'));
console.log("jla.has('Green Lantern') -> " + jla.has('Green Lantern'));

//Sets do not have index notation for inspecting individual entries, so you can't find the value of the first element in a set like this
console.log("jla[0] -> " + jla[0]);

//Removing values from sets
//The delete() method can be used to remove a value from a set. This returns a boolean value of true if the value was removed from the set, or false if the value wasn't in the set and couldn't be removed
console.log("jla.delete('Superman') -> " + jla.delete('Superman'));
console.log(jla);

//The clear() method can be used to remove all values from a set
console.log("jla.clear() -> " + jla.clear());
console.log("jla.size -> " + jla.size);



//Converting sets to arrays
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');

const shoppingArray = [...shoppingSet];
console.log(shoppingArray);

//It's also possible to use the Array.from() method to convert a set into an array. The following code would achieve the same result as using the spread operator above
const shoppingSet2 = new Set().add('Apples').add('Bananas').add('Beans');

const shoppingArray2 = Array.from(shoppingSet2);
console.log(shoppingArray2);

const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];
console.log(duplicate);
const nonDuplicate = [...new Set(duplicate)];
console.log(nonDuplicate);

//Weak sets
//When objects are added to sets, they will be stored there as long as the set exists, even if the original reference to the object is removed. The technical term for this is the object is prevented from being garbage-collected, which can cause a memory leak.
let array_x = [1, 2, 3];
const strong = new Set().add(array_x);
array = null;
console.log(strong);

//The array still exists inside the set and we can get the original value of array back using the spread operator
array_x = [...strong][0];
console.log(array_x);

/*
Memory Leaks
A memory leak occurs when a program retains references to values that can no longer be accessed in its memory. This means that memory is being used to store values that are no longer required by the program, effectively wasting system
resources.

Memory leaks can cause problems by gradually reducing the overall memory available, which can cause the program, or even the entire system, to run more slowly.

Most modern programming language, including JavaScript, employ various dynamic memory management techniques such as garbage collection, which is the process of automatically removing items from memory that are no longer required by the program. Some languages, such as C++, require the programmer to manually manage memory by removing items from memory once they are finished with.
*/

//Weak sets avoid this situation by garbage collecting any references to a “dead object” that’s had its original reference removed. To create a weak set, the new operator and the WeakSet() constructor in the same way that we created a set
const weak = new WeakSet();

//Only non-primitive data types can be added to weak sets. Trying to add primitive values will throw a type error:
//weak.add(2)
//<< TypeError: Invalid value used in weak set

//Apart from these restrictions, weak sets behave in the same way as regular sets, and have the has(), add(), and delete() methods that work in the same way

//In the next example we can see what happens if we add an array to a weak set:
const array_y = [1, 2, 3];
weak.add(array_y);

//Because weak maps use weak references to objects, they don’t have access to a list of values they contain. This makes the return value in the example look as though the weak set is empty, when, in fact it isn’t. We can confirm it does indeed contain the array object by using the has() method:

weak.has(array_y);

//We can remove the array from the weak set using the delete() method:
weak.delete(array_y);

//And check it’s been removed using the has() method again:
weak.has(array_y);



//Maps
/*
At first glance, maps appear to be similar to JavaScript objects,  but they have some noticeable differences:
- Objects are limited to using strings for key values, whereas maps can use anydata type as a key.
- There is no efficient way to find the number of key-value pairs an object has, whereas this is easy to do with maps using the size property.
- Objects have methods that can be called and prototypes that can be used to create a chain of inheritance, whereas maps are solely focused on the storage and retrieval of key-value pairs.
- The value of an object’s properties can be accessed directly, whereas maps restrict you to using the get() method to retrieve any values.
*/

//Creating maps
const romanNumerals = new Map();

//Adding entries to maps
romanNumerals.set(1, 'I');
console.log(romanNumerals);
romanNumerals.set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);

//Map methods
//get()
console.log("romanNumerals.get(4) -> " + romanNumerals.get(4));

//has()
console.log("romanNumerals.has(5) -> " + romanNumerals.has(5));
console.log("romanNumerals.has(10) -> " + romanNumerals.has(10));

//A map can be creted with multiple values by using a nested array as a parameter
const heroes2 = new Map([['Clark Kent', 'Superman'], ['Bruce Wayne', 'Batman'], ['Shayera Hol', 'Hawkgirl']]);

//The number of key and value pairs in a map can be found by querying the size property
console.log(heroes2);
console.log("heroes2.size -> " + heroes2.size);

//Removing entries from maps
//delete()
heroes2.delete('Clark Kent');
console.log("heroes2.delete('Clark Kent')");
console.log("heroes2.size -> " + heroes2.size);
heroes2.clear();
console.log("heroes2.clear()");
console.log("heroes2.size -> " + heroes2.size);


//Converting maps to array
console.log("[...romanNumerals]");
console.log([...romanNumerals]);
console.log("Array.from(romanNumerals)");
console.log(Array.from(romanNumerals));



//Weak Maps
//Weak maps work in the same way as weak sets. They are the same as maps, except their keys cannot be primitives, and the garbage collector will automatically remove any dead entries when the reference to the original object is deleted
const weak2 = new WeakMap();

/*
Weak maps can use the has(), get(), set() and delete() methods in the same way as a regular map.

Weak maps and sets are useful for optimizing memory usage and avoiding memory leaks, but they’re also limited in that they don’t have access to 
all the methods their regular counterparts have. For example, you cannot use the size() method to see how many entries they contain. The choice 
of which to use will depend on what you plan to use them for.
*/



//Logic
//If statements: The code inside the block will only run if the condition in parentheses is true. 
/*
if(condition){
    //code to run if condition is true
}
*/

let age = 23;
if(age < 18){
    console.log('Sorry, you are not old enough to play.');
}

age = 12;
if(age < 18){
    console.log('Sorry, you are not old enough to play.');
}

//Else statements: The else keyword can be used to add an alternative block of code to run if the condition is false.
/*
if(condition){
    //code to run if condition is true
}else{
    //code to run if condition is false
}
*/

const n = 12;
if(n % 2 === 0){
    console.log('n is an even number');
}else{
    console.log('n is an odd number');
}


//Ternary operator
//A shorthand way of writing an if ... else statement is to use the ternary operator, ?, which takes three operands in the following format
//condition ? (code to run if condition is true) : (code to run if condition is false)

const m = 5;
m % 2 === 0 ? console.log("m is an even number"): console.log("m is an odd number");

//We could make the example even shorter by placing the ternary operator inside a template string
console.log(`n is a ${(n % 2 === 0) ? 'even' : 'odd'} number`);


//switch statements
//You can actually string lots of if and else statements together to make a logical decision tree
let number = 6;

if(number === 4){
    console.log("If/Else -> Four");
}else if(number === 5){
    console.log("If/Else -> Five");
}else if(number === 6){
    console.log("If/Else -> Six");
}else{
    console.log("If/Else -> Default");
}

//The switch operator can be used to make your code easier to follow when there are lots of conditions to test. The example above can be rewritten using a switch statement like so:

switch(number){
    case 4:
        console.log("Switch -> Four");
        break;
    case 5:
        console.log("Switch -> Five");
        break;
    case 6:
        console.log("Switch -> Six");
        break;
    default://The default keyword is used at the end for any code than needs to be run if none of the cases are true.
        console.log("Switch -> Default");
        break;
}

//It is important to finish each case block with the break keyword, as this stops any more of the case blocks being executed. Without a break statement, the program will "fall through" and continue to evaluate subsequent case blocks.



//Loops
/*
While

while(condition){
    //do something
}
*/
console.log("while (example 1)");
let bottles = 3;
while(bottles > 0){
    console.log(`There are ${bottles} bottles, one fell, now there are ${bottles - 1} bottles.`);
    bottles--;
}

console.log("while (example 2)");
let bottles2 = 4;
while(--bottles2){
    console.log(`There are ${bottles2} bottles2, one fell, now there are ${bottles2 - 1} bottles2.`);
}

/*
The reason this code works is because the loop will continue while the bottles variable is true, and before each loop, the value of the bottles 
variable decreases by 1. When the bottles variable reaches 0, it is not true anymore (remember that 0 is a falsy value) so the loop will stop. 
Notice that you have to start with one more bottle (4) as it will be decreased by one even before the first block is run.
*/


//Infinite Loops
/*
It is important that the condition in a while loop will be met at some point, otherwise your code will get stuck in an infinite loop that could 
possibly crash the program.

let n = 1;
while(n>0){
    console.log('Hello');
    n++;
}

This loop will keep running, as the variable n will always be above zero. Most browsers will warn you that there is a slow running script when
this happens and give you the option to stop it. If not, you can kill the process by closing the tab or restarting the browser. Obviously you 
want to avoid this happening, though; especially with public-facing code
*/


//do...while loops
/*
do{
    do something
}while(condition)

This means that the block of code will always be run at least once, regardless of the condition being true or not
*/

let bottles3 = 3;
console.log("bottles3 -> " + bottles3);
console.log("do...while");
do{
    console.log(`There are ${bottles3} bottles3, one fell, now there are ${bottles3 - 1} bottles3.`);
    bottles3--;
}while(bottles3 > 0)



//for loops
/*
For loops are probably the most commonly type of loop used in JavaScript, and take the following form:

for(initialization; condition; after){ do something }

The initialization code is run before the loop starts and is usually employed to initialize any variables used in the loop. The condition has 
to be satisfied for the loop to continue. The after code is what to do after each iteration of the loop, and it is typically used to increment 
a counter of some sort.
*/

console.log("for (example 1)");
for(let bottles4 = 3; bottles4 > 0; bottles4--){
    console.log(`There are ${bottles4} bottles4, one fell, now there are ${bottles4 - 1} bottles4.`);
}

//Each part of a for loop are optional, and the code could be written as:

console.log("for (example 2)");
let bottles5 = 3;
for( ; bottles5 > 0; ){
    console.log(`There are ${bottles5} bottles4, one fell, now there are ${bottles5 - 1} bottles4.`);
    bottles5--;
}

//As you can see, it’s possible to use a while loop, a do ... while loop, or a for loop to achieve the same results


//Nested for loops
//You can place a loop inside another loop to create a nested loop.
for(let i = 1; i < 4; i++){
    for(let j = 1; j < 4; j++){
        console.log(`${j} multiplied by ${i} is ${i * j}.`);
    }
}

console.log(avengers);
console.log("for in array (example 1)");
//Looping over arrays
//A for loop can be used to iterate over each value in an array. 
for(let i = 0, max = avengers.length; i < max; i++){
    console.log(avengers[i]);
}


//ES6 introduced an improved iterator function for arrays called a for-of loop that uses a slightly different syntax:
console.log("for in array (example 2)");
for(const value of avengers){ // Note that this variable needs to be declared using const
    console.log(value);
}


//Looping over sets
/*
Sets are enumerable, which means they have methods that allow 
you to loop over each value in the set.  The loop will iterate 
over each value in the same order they were added to the set. 
To demonstrate this, we will use the set of letters that 
wecreated earlier:
*/

const letters2 = new Set('hello');

for(const letter of letters2){
    console.log(letter);
}

//Note that weak sets are non-enumerable, so it’s not possible to loop over them in this way.


//Looping over maps

//Keys
for(const key of romanNumerals.keys()){
    console.log("key -> " + key);
}

//Values
for(const value of romanNumerals.values()){
    console.log("value -> " + value);
}

//Both
for(const [key,value] of romanNumerals.entries()){
    console.log(`${key} in Roman numerals is ${value}`);
}

//Note that weak maps are also non-enumerable, so it isn’t possible to loop over them using any of the methods shown above