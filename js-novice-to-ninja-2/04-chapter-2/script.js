// Single Comment

/*Multiple
Comments*/

//Javascript Grammar
const message = "Hello World!"
console.log(message)

const message2 = "Hello World 2!"; console.log(message2);

const message3 = "Hello World 3!";
console.log(message3);

{
//This 'message' variable's different because is between the curly brackets, making a block of code
    const message = "Hello World 4!";
    console.log(message);
}

//Data type
console.log("typeof \"hello\" -> " + typeof "hello");
console.log("typeof 10 -> " + typeof 10);
console.log("typeof true -> " + typeof true);
console.log("typeof { ninja: \"turtle\" } -> " + typeof { ninja: "turtle" });
console.log("typeof [1, 2, 3, 4] -> " + typeof [1, 2, 3, 4]);

//Variables
const name = "Alex"; //The variable will not be reassigned to another value
let score = 0; //The variable might be reassigned later in the program

console.log("name -> " + name);
console.log("score -> " + score);
score = 5;
// name = "Anna"; -> It'll report a error
console.log("score -> " + score);

//Declaring multiple variables on the same line
let x = 5, y = 3, z = 6;

//Data inside object can change
const person = {name: "Lívia"};
console.log("person.name -> " + person.name);
person.name = "Roberto";
console.log("person.name -> " + person.name);

//Scope
const scope = 10;

{   
    const scope = 5; //It can use the same variable name without conflict, because this is a local area
    console.log("scope -> " + scope);
}

console.log("scope -> " + scope); //The variables are differents



let a = 25;
console.log("Example A");
{
    console.log("Receiving a global variable: " + a); //Global
}

{
    let a = 50;
    console.log("The global variable was overwrited in local area: " + a); //Local
}



let b = 100;
console.log("Example B");
{
    console.log("Initial value: " + b);
    b = 200;
    console.log("Value changed in local area: " + b);
}
console.log("The value remains outside: " + b);



console.log("Example C");
{   
    c = 15;
    console.log("Inside value: " + c);
    let d = 30;
}
console.log("The value remains because the variable was initialized without to use let or const: " + c);
//console.log(d); //[ERROR ALERT] -> This line will create a error because it can't find the 'd' variable

//Using let or const to declare variables will ensure they are block scope




/*  Naming constants and variables
    Use names that describe what the variable represents, "let phone;" is better that "let x;"
    • Upper or lower-case letter    ->      let name; or let Name;
    • Underscore                    ->      let _message;
    • Dollar character              ->      let $id;
    • Never start with a number     ->      let 1score; [ERROR]
    • It's okay in the sequence     ->      let score1; ... let sco1re; ... and so on
    (The same to const)

    ATTENTION:
        1) Variables that start with an underscore generally refer to private properties and
    methods, so it’s best to not follow this convention for your own variable names.

        2) The $ character is also used by the popular jQuery library, so using this in your
    variable names may also cause problems.

        3) Constant and variable names are case sensitive, so the variable 'SCORE' is different
    to 'Score' and 'score'.

    There are two conventions to multiple words in constants and variables
    • Camel case starts with a lowercase letter and then each new word is capitalized:
    const totalPointsAndBonus;
    
    • Underscore separates each new word with an underscore:
    const total_points_and_bonus;
*/



//Direct Assignment and Assignment by Reference

const var_a = 1;
let var_b = var_a;  // var_a = 1     var_b = 1
console.log("var_a -> " + var_a + " var_b -> " + var_b);
var_b = 2;          // var_a = 1     var_b = 2
console.log("var_a -> " + var_a + " var_b -> " + var_b);


const var_c = {value: 5};
let var_d = var_c;  //var_c.value = 5     var_d.value = 5
console.log("var_c -> " + var_c.value + " var_d -> " + var_d.value);
var_d.value = 10;   //var_c.value = 10     var_d.value = 10
console.log("Referencing the same object");
console.log("var_c -> " + var_c.value + " var_d -> " + var_d.value);



//Strings

//Creating a constructor string object 
console.log(new String("hello"));

/*
You can use single quote('text') or double quotes("text")
console.log('You're my friend.'); //It'll result a error
To fix this problem you have to use the backslash character escape (\)
*/
console.log('You\'re my friend.');
//The same to double quotes
console.log("She is a \"good\" friend.");
//You can mix the two symbols
console.log("You're my friend.");
console.log('She is a "good" friend.');

/*
Others special characters in strings:
    \'      Single quote marks
    \"      Double quote marks
    \n      End of line
    \r      Carriage return (Mac systems, Fax)
    \t      Tab
    \\      Backslash
*/

console.log("Line 1\nLine 2");
console.log("\tTab");
console.log("\\Backslash\\");


//String Properties and Methods

//Retrieve the name variable's length property 
console.log("The 'Brazil' word has " + "Brazil".length + " letters."); //Direct String
let country = "Portugal";
console.log("The 'Portugal' word has " + country.length + " letters."); //Variable

//Alternative notation
console.log(country['length']);

//All properties of primitve data types are immutable, meaning they're unable to be changed.
country.length = 10;
console.log("country.length = 10 -> It's immutabe, the result remains " + country.length);

const game = "Castlevania";
console.log("game -> " + game);
console.log("game.toUpperCase() -> " + game.toUpperCase());
console.log("game.toLowerCase() -> " + game.toLowerCase());

//Return the character at position informed
console.log("game.charArt(3) -> " + game.charAt(3));

//Finding the first character passed
console.log("game.indexOf(v) -> " + game.indexOf('v'));
console.log("game.indexOf(z) -> " + game.indexOf('z')); //Returns -1
console.log("game.indexOf(a) -> " + game.indexOf('a')); //First occurrence
console.log("game.lastIndexOf(a) -> " + game.lastIndexOf('a')); //Last occurrence

//If the string contains a certain character
console.log("game.includes('n') -> " + game.includes('l'));
console.log("game.includes('N') -> " + game.includes('N'));
console.log("game.includes('p') -> " + game.includes('p'));

//If a string starts with a certain character
console.log("game.startsWith('C') -> " + game.startsWith('C'));
console.log("game.startsWith('c') -> " + game.startsWith('c'));

//If a string ends with a certain character
console.log("game.endsWith('a') -> " + game.endsWith('a'));
console.log("game.endsWith('A') -> " + game.endsWith('A'));

//Solving problems with capitalize or lowercase
//Transform the variable to upper or lower
console.log("Solving capitalize or lowercase problems:")
let lower_text = game.toLowerCase();
let upper_text = game.toUpperCase();
//Now you can compare in upper or lower without problems
//Includes
console.log("lower_text.includes('N'.toLowerCase()) -> " + lower_text.includes('N'.toLowerCase()));
//Starts With
console.log("upper_text.startsWith('c'.toUpperCase()) -> " + upper_text.startsWith('c'.toUpperCase()));
//Ends With
console.log("lower_text.endsWith('A'.toLowerCase()) -> " + lower_text.endsWith('A'.toLowerCase()));



//Concatenate two or more strings
console.log("'Cont'.concat('inue') -> " + 'Cont'.concat('inue'));
console.log("'Game'.concat(' ', 'Over', '!') -> " + 'Game'.concat(' ', 'Over', '!'));

//Removing whitespaces from the beginning and end of a string
console.log("'     Resident Evil 3     '.trim() -> " + '     Resident Evil 3     '.trim());//The space in the middle will be preserved
console.log("\t\tResident Evil 3 -> " + '\t\tResident Evil 3'.trim()); //Escaped tabs and carriage returns are also removed

//Repeating a string the stated numbers of times
console.log("'Go'.repeat(3) -> " + 'Go'.repeat(3));


//Template literals
console.log("`She said, \"It's Me!\"` -> " + `She said, "It's Me!"`); //Advantage of being able to use both types of quote mark within the string

//They also allow interpolation of Javascript code
const her_name = `Helen`;
console.log("her_name -> " + her_name);
console.log("`Hello ${her_name}!` -> " + `Hello ${her_name}!`);

const her_age = 30;
console.log("her_age -> " + her_age);
console.log("`${her_age + 1}` -> " + `${her_age + 1}`);

//Template literals can also contain line breaks and to place a backtick inside uses the backslash escape
console.log(`This is the start ...\n\`\n... and this is the end.`);



//Symbols

const uniqueID = Symbol("This is a unique ID");
console.log("typeof uniqueID -> " + typeof uniqueID);

console.log(uniqueID);

//It is possible for two variables to point to the same symbol if the for() method is used when the symbol is created:
const A = Symbol.for("shared symbol");
const B = Symbol.for("shared symbol");
//The variable A and B now both point to the same symbol in memory.



//Numbers
//Numbers can be integers or floating points numbers. Examples:
console.log("typeof 42 -> " + typeof 42);//integer
console.log("typeof 3.14159 -> " + typeof 3.14159);//floating point decimal

//Distinguishing between integers and floating point decimals
console.log("Number.isInteger(42) -> " + Number.isInteger(42));
console.log("Number.isInteger(3.14159) -> " + Number.isInteger(3.14159));

//Constructor Function for Numbers
let number_x = new Number(3);
console.log(number_x);


//Octal, Hexadecimal and Binary numbers
console.log("Octal: 0o47 -> " + 0o47);//Octal

console.log("Hexa: 0xAF -> " + 0xAF);//Hexa

console.log("Binary: 0b1010 -> " + 0b1010);//Binary


//Exponential Notation
//Numbers can also be represented in exponential notation, which is shorthand for "multiply by 10 to the power of"
console.log("1e6 -> " + 1e6);//means 1 multiplied by 10 to the power 6(1000000) = 1 * 1000000 = 1000000
console.log("2E3 -> " + 2E3);//means 2 multiplied by 10 to the power 3(1000) = 2 * 10^3 = 2000
console.log("2.5e-3 -> " + 2.5e-3);//means 2.5 multiplied by 10 to the power -3(0.001) = 2.5 * 10^-3 = 0.0025


//toExponential()
console.log("5..toExponential() -> " + 5..toExponential());
console.log("5 .toExponential() -> " + 5 .toExponential());
console.log("5.0.toExponential() -> " + 5.0.toExponential());
console.log("(5).toExponential() -> " + (5).toExponential());
const number_y = 5;
console.log("number_y.toExponential() -> " + number_y.toExponential());

//toFixed()
const PI = 3.1415926;
console.log("PI -> " + PI);
console.log("PI.toFixed(3) -> " + PI.toFixed(3));

//toPrecision()
console.log("325678..toPrecision(2) -> " + 325678..toPrecision(2));
console.log("2.459.toPrecision(2) -> " + 2.459.toPrecision(2));



//Arithmetic Operations
//Addition
console.log("5 + 4.3 -> " + (5 + 4.3));

//Subtraction
console.log("6 - 11 -> " + (6 - 11));

//Multiplication
console.log("6 * 7 -> " + (6 * 7));

//Division
console.log("3/7 -> " + (3/7));

//Exponentiation
console.log("2**3 -> " + (2**3));

//Modulo
console.log("23%6 -> " + (23%6));
console.log("23%6 -> " + (-4%3)); //The result always has the same sign as the first number



//Changing the value of variables
let points = 0;
console.log("points -> " + points);
points = points + 10;
console.log("points = points + 10 -> points = " + points);
points += 10;
console.log("points += 10 -> points = " + points);
points *= 10;
console.log("points *= 10 -> points = " + points);
points /= 2;
console.log("points /= 2 -> points = " + points);
points %= 17;
console.log("points %= 17 -> points = " + points);


//Incrementing values
points++;
console.log("points++ -> " + points);
points--;
console.log("points-- -> " + points);

/*
Difference between putting ++ operator before or after
    variable++ -> It will return the original value then increase it 1 point
    ++variable -> It will increase the value by 1 then return that value
    variable-- -> It will return the original value then decrease it 1 point
    --variable -> It will decrease the value by 1 then return that value
*/


//Infinity
console.log("1e308 -> " + 1e308); //1 with 308 zeros
console.log("2e308 -> " + 2e308);
console.log("-1e309 -> " + -1e309); 
console.log("Max. positive value -> " + 1.7976931348623157e+308);
console.log("Max. negative value -> " + (-1.7976931348623157e+308));
console.log("1/0 -> " + (1/0));
console.log("Smallest number that Javascript can deal -> " + 5e-324);
// Anything below this evaluates to either 5e-324 or zero
console.log("3e-325 -> " + 3e-325);



//NaN
//NaN is an error value that is short for "Not a Number".
console.log("'hello' * 5 -> " + 'hello' * 5);

//The result by the typeof operator is rather ironic
console.log("(ironic) typeof NaN -> " + typeof NaN);



//Checking a value is a Number
//It will return true if the value is a number that isn't Infinity, -Infinity or NaN
console.log("Number.isFinite(1/0) -> " + Number.isFinite(1/0));
console.log("Number.isFinite(-Infinity) -> " + Number.isFinite(-Infinity));
console.log("Number.isFinite(NaN) -> " + Number.isFinite(NaN));
console.log("Number.isFinite(42) -> " + Number.isFinite(42));



//Type Coercion
//It happens when the operands of an operator are of different types
console.log("'5' * 5 -> " + ('5' * 5));
console.log("'5' + 5 -> " + ('5' + 5));


//Converting between Strings and Numbers
//We can convert numbers to strings and vice versa using a variety of methods
console.log("String to Number");
console.log("Number('23') -> " + Number('23'));
console.log("Number('hello') -> " + Number('hello'));

//There are a few tricks that can also be used to convert a string into a number that use type coercion
let answer = '5' * 1;
console.log(typeof answer);
answer = +'5';
console.log(typeof answer);
//These methods are very hacky and not recommended


console.log("Number to String");
console.log("String(3) -> " + String(3));
console.log("3 + '' -> " + 3 + '');
console.log("10..toString() -> " + 10..toString());
console.log("10..toString(2) -> " + 10..toString(2));
console.log("28101..toString(36) -> " + 28101..toString(36));



//Parsing Numbers
console.log("parseInt('1010', 2) -> " + parseInt('1010', 2)); //1010 to base 2
console.log("parseInt('omg', 36) -> " + parseInt('omg', 36));
console.log("parseInt('23', 10) -> " + parseInt('23', 10));

const address = '221B Baker Street';
console.log("address -> " + address);
console.log("parseInt(address, 10) -> " + parseInt(address, 10));
console.log("Number(address) -> " + Number(address));
console.log("parseInt('2.4',10) -> " + parseInt('2.4',10));
console.log("parseInt('2.9',10) -> " + parseInt('2.9',10));
console.log("parseFloat('2.9',10) -> " + parseFloat('2.9',10));



//Undefined
//Undefined is the value given to variables that have not been assigned a value.

//Null
//Null means "no value". It can be thought of as a placeholder that JavaScript uses to say "there should be a value here, but there isn't at the moment."

console.log("10 + null -> " + (10 + null));
console.log("10 + undefined -> " + (10 + undefined));



//Booleans
console.log("Boolean('hello') -> " + Boolean('hello'));
console.log("Boolean(42) -> " + Boolean(42));
console.log("Boolean(0) -> " + Boolean(0));

/*
Only 9 values are always false and these are known as falsy values:
1)          ""
2)          ''
3)          ``
4)          0
5)          -0
6)          NaN
7)          false
8)          null
9)          undefined
*/


//Local Operators
//!(Logical NOT)
console.log("!true -> " + !true);
console.log("!0 -> " + !0);

//You can use double negation(!!) to find out if a value us truthy or falsy
console.log("!!'' -> " + !!'');
console.log("!!'hello' -> " + !!'hello');
console.log("!!3 -> " + !!3);
console.log("!!NaN -> " + !!NaN);
console.log("!!'false' -> " + !!'false');
console.log("!!'0' -> " + !!'0');


//&& (Logical AND)
console.log("'shoes' && 18 -> " + ('shoes' && 18));
console.log("'shoes' && 0 -> " + ('shoes' && 0));


//|| (Logical OR)
console.log("'shoes' || 0 -> " + ('shoes' || 0));
console.log("NaN || undefined -> " + (NaN || undefined));



//Lazy Evaluation
let abc = 0;
console.log("abc -> " + abc);
console.log("false && (abc = 1) -> " + (false && (abc = 1)));
console.log("abc -> " + abc);
console.log("false || (abc = 1) -> " + (false || (abc = 1)));
console.log("abc -> " + abc);


//Bitwise Operators
//Bitwise AND
// in binary this is 1100 & 1010, so only the first digit is 1 in both cases. This returns 1000, which is 8 in binary
console.log("12 & 10 -> " + (12 & 10));

//Bitwise OR
// in binary this is 1100 & 1010, so the first 3 digits contain a 1, returning 1110, which is 14 in binary
console.log("12 | 10 -> " + (12 | 10));

//Bitwise XOR
// in binary this is 1100 & 1010, so only the second and third digits are exclusively 1s, so 0110 is returned, which is 6 in binary
console.log("12 ^ 10 -> " + (12 ^ 10));


//[ALERT]: Don't use ^ to notate exponents, for example 2^3 will not return 8. The exponente operator is **, i.e.: 2**3.

console.log("1 ^ 0 -> " + (1 ^ 0));
console.log("true ^ true -> " + (true ^ true));

//Bitwise Shift Operators
console.log("3 << 0 -> " + (3 << 0)); //3x2**0 = 3x1 = 3
console.log("3 << 1 -> " + (3 << 1)); //3x2**1 = 3x2 = 6
console.log("3 << 2 -> " + (3 << 2)); //3x2**2 = 3x4 = 12
console.log("3 >> 0 -> " + (60 >> 0)); //60/2**0 = 60/1 = 60
console.log("3 >> 1 -> " + (60 >> 1)); //60/2**1 = 60/2 = 30
console.log("3 >> 2 -> " + (60 >> 2)); //60/2**2 = 60/4 = 15



//Comparison
//Equality
const answer_x = 5;
console.log("answer_x -> " + answer_x);//It's used for assigning values to variables

//The correct way to check for equality is to use either a double equals operator, ==, known as "soft equality" or the triple equals operator, ===, known as hard equality".

console.log("answer_x == 5 -> " + (answer_x == 5));

//This seems to work fine, but unfortynally there are some slight problems when using soft equality

console.log("answer_x == '5' -> " + (answer_x == '5'));

console.log("'' == 0 -> " + ('' == 0));
console.log("'' == '0' -> " + ('' == '0'));
console.log("false == '0' -> " + (false == '0'));
console.log("'1' == true -> " + ('1' == true));
console.log("'2' == true -> " + ('2' == true));
console.log("'true' == true -> " + ('true' == true));
console.log("null == undefined -> " + (null == undefined));


//Hard Equality
//The hard, or strict, equality operator, ===, tests for equality but only returns true if and only if they are of same data type

console.log("answer_x === 5 ->" + (answer_x === 5));
console.log("answer_x === '5' ->" + (answer_x === '5'));
console.log("null === undefined -> " + (null === undefined));

//The only strange result produced by hard equality is this:
console.log("(strange result) NaN === NaN -> " + (NaN === NaN));

//There's a special Number method called Number.isNaN() to test it:
console.log("Number.isNaN(NaN) -> " + Number.isNaN(NaN));
console.log("Number.isNaN(5) -> " + Number.isNaN(5));

/*
The Number.isNaN() method is new to ES6 and replaces the global isNaN() method. This old method has the unfortunate property of reporting strings as NaN as well as NaN itself, as can be seen in the example below:
    isNaN('hello');
    << true
This is because of our old nemesis, type coercion! The function first of all tries to convert the string to a number, and strings without numerals are converted to NaN:
    Number('hello');
    << NaN
Because of this, the new Number.isNaN() method should always be used to check if a value is NaN.
*/



//Inequality
//There's a soft inequality operator, != and a hard inequality operator, !==.

console.log("16 != '16' -> " + (16 != '16'));
console.log("16 !== '16' -> " + (16 !== '16'));


//Greater than and Less than
console.log("8 > 4 -> " + (8 > 4));
console.log("8 < 4 -> " + (8 < 4));
console.log("8 >= 4 -> " + (8 >= 4));
console.log("8 >= 8 -> " + (8 >= 8));

// But be careful; the equality test works in the same way as the soft equality operator:
console.log("8 >= '8' -> " + (8 >= '8'));

/*
As you can see, type coercion means that strings can be confused with numbers. Unfortunately, there are no "hard" greater-than or equal-to operators, so an alternative way to avoid type coercion is to use a combination of the greater-than
operator, logical OR, and a hard equality:
*/

console.log("8 > 8 || 8 === 8 -> " + (8 > 8 || 8 === 8));
console.log("8 > '8' || 8 === '8' -> " + (8 > '8' || 8 === '8'));

//There is also a similar "less-than or equal-to" operator:
console.log("-1 <= 1 -> " + (-1 <= 1));
console.log("-1 <= -1 -> " + (-1 <= -1));

// These operators can also be used with strings, which will be alphabetically ordered to check if one string is "less than" the other:

console.log("'apples' < 'bananas' -> " + ('apples' < 'bananas'));

// Be careful, though, as the results are case-sensitive, and upper-case letters are considered to be "less than" lower-case letters:
console.log("'apples' < 'Bananas' -> " + ('apples' < 'Bananas'));


