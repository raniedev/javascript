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
