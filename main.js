// Introduction
//
//
// console styling
console.log("%cThe %cPenguin %cBoss", "font-size: 40px; color: red;", "font-size: 40px; font-weight: bold; color: green;", "font-size: 40px; background-color: blue; color: white;");
// console group
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grandchild Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // Close Grandchild Group
console.groupEnd(); // Close Child Group
console.groupEnd(); // Close Group 1
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // Close Group 2
// console table
console.table(["yassine", "youness", "mehdi", "fouziya", "meryem", "zineb"]);
// console table using variable
const family = [{ name: "yassine" }, { name: "youness" }, { name: "mehdi" }, { name: "fouziya" }, { name: "meryem" }, { name: "zineb" }];
console.table(family);
//
//
// Data Types And Variables
// String
console.log("Yassine Douhabi", "2001");
console.log("%c" + typeof ("Yassine Douhabi", "2001"), "color:green;");
// Number
console.log(2001);
console.log(2001.99);
console.log("%c" + typeof 2001.99, "color:green;");
// Array => Object
console.log(["Yassine", "Douhabi", 2001]);
console.log("%c" + typeof ["Yassine", "Douhabi", 2001], "color:green;");
// Object
console.log({ name: "Yassine", age: 23, country: "Douhabi" });
console.log("%c" + typeof { name: "Yassine", age: 17, country: "Douhabi" }, "color:green;");
// boolean
console.log(true);
console.log("%c" + typeof true, "color:green;");
console.log(false);
console.log("%c" + typeof false, "color:green;");
//
//
//
//
//   Var
//   - Redeclare (Yes) var a = 1; var a = 2;
//   - Access Before Declare (Undefined)
//   - Variable Scope Drama [Added To Window] ()
//   - Block Or Scope Function

//   Let
//   - Redeclare (No => Error) let a = 1; let a = 2;
//   - Access Before Declare (Error)
//   - Variable Scope Drama ()
//   - Block Or Scope Function

//   Const
//   - Redeclare (No => Error) const a = 1; const a = 2;
//   - Access Before Declare (Error)
//   - Variable Scope Drama ()
//   - Block Or Scope Function
//
//
// Character Escape Sequences
console.log("This is a string with escape sequences:");
console.log("\t- Newline character");
console.log("\t- Tab character");
console.log("\t- Backspace character\b");
console.log("\t- Form feed character\f");
console.log("\t- Vertical tab character\v");
console.log('You can use double quotes inside a string: "Hello!"');
console.log("And single quotes as well: 'JavaScript'");
console.log("Unicode character example: \u03A9");
//   String Syntax + Character Escape Sequences
//   \ Escape + Line Continue
//   \n
console.log('The Penguin "Boss"');
console.log("The Penguin 'Boss'");
console.log('The Penguin "Boss"');
console.log("The \\ Penguin 'Boss'");
console.log(
  "The \
Penguin \
Boss"
);
console.log("The\nPenguin\nBoss");
//
//
//
//   Concatenation
let a = "We Love";
let b = "JavaScript";
document.write(a + " " + b);
console.log(a, b);
/*
Template Literals (Template Strings)
*/

// First Example

let c = "We Love";
let d = "JavaScript";
let e = "And";
let f = "Programming";

console.log((c = ' "" ' + d + "\n" + e + " " + f));

console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

// Second Example

let title = "yassine";
let desc = "the penguin boss";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);
// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat

// Variable Challenge
let pagTitle = "Elzero",
  pagDescription = "Elzero Web School",
  pagDate = "25/10";
let card = `
<div>
    <h3>Hello ${pagTitle}</h3>
    <p>${pagDescription}</p>
    <span>${pagDate}</span>
</div>`;
document.write(card.repeat(4));

var welcome = "Welcome to Sweater Season!"; // globally scoped
function fallActivities() {
  var activities = "buy a pumpkin and make Jack O Lantern";
  // locally scoped
  console.log(`You can ${activities}`);
}
console.log(welcome); // Welcome to Sweater Season!
// console.log(activities); // ReferenceError: activities is not defined

// We can also update the var variable if you want.
var welcome = "Welcome to Sweater Season";
console.log(welcome);
welcome = "Pumpkin Spice Latte! Halloween! Red Leaves!";
console.log(welcome);

// We can redeclare the var variable as well.
var welcome = "Welcome to Sweater Season";
console.log(welcome);
var welcome = "Pumpkin Spice Latte! Halloween! Red Leaves!";
console.log(welcome);
//
function fallActivities() {
  console.log(activities); // undefined
  var activities = "buy a pumpkin and make Jack O Lantern";
  console.log(`You can ${activities}.`);
}
/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ P ost++ / ++Pre ]
  -- Decrement [ Post-- / --Pre ]
*/

console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1

num = 10;
document.write(++num);
/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let k = "100";
let l = 20;
let m = true;

console.log(+k + l + m);
/*
  Assignment Operators
*/

let u = 10;

u = u + 20;

u = u + 70;

u += 100; // u = u + 100

u -= 50; // u = u - 50

u /= 50; // u = u / 50
/*
  Number
  - Double Precision // jam3a ga3 numbers f javascript
  - Syntactic Sugar "_"  // katsahal l9raya dyal numbers wlkn ma 3ndha hta chi effect.
  - e
  - **
  - With Decimal
  - Number + BigInt // kay9dar nsta3mlo numbers kbar bezaf
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);
/*
  Number Methods
  - Two Dots To Call A Methods // console.log(100..toString());  console.log(100.10.toString());
  - toString()
  - toFixed()
  - parseInt() // ta7lil numbers 
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString()); // 100
console.log((100.1).toString()); // 100.1

console.log((100.554555).toFixed(2)); // 100.56

console.log(Number("100 Osama")); // NaN
console.log(+"100 Osama"); // NaN
console.log(parseInt("100 Osama")); // 100
console.log(parseInt("Osama 100 Osama")); // NaN
console.log(parseInt("100.500 Osama")); // 100
console.log(parseFloat("100.500 Osama")); // 100.5

console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.5)); // false
console.log(Number.isInteger(100)); // true

console.log(Number.isNaN("Osama" / 20)); // true
/*
  Math Object
  - round() // kat9arab l2a9rab 9ima
  - ceil() // katl3o a3la 9ima
  - floor() // kathabto l2a9al 9ima
  - min()
  - max()
  - pow()
  - random() // hia l2oss
  - trunc() [Es6] // 9at3 lkossor f'mara
*/

console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100

console.log(Math.ceil(99.2)); //100
console.log(Math.floor(99.9)); // 99

console.log(Math.min(10, 20, 100, -100, 90)); // -100
console.log(Math.max(10, 20, 100, -100, 90)); // 100

console.log(Math.pow(2, 4)); // 16
console.log(Math.random()); // 3achwa2i
console.log(Math.trunc(99.5)); // 99
/*
  String Methods
  - Access With Index // kaybda mn 0
  - Access With charAt()
  - length // kay7ssab mn 1
  - trim() // kay7ayaed spaces
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// Access With Index
var text = "Hello, World!";

// Access character at index 7 (indexing starts from 0), prints "W"
console.log(text[7]);

// Access With charAt()
// Access character at index 7 using charAt, prints "W"
console.log(text.charAt(7));

// length
var sentence = "This is a sample sentence.";

// Get the length of the string, prints 26
console.log(sentence.length);

// trim()
var spacedText = "   This has extra spaces   ";

// Trim leading and trailing spaces, prints "This has extra spaces"
console.log(spacedText.trim());

// toUpperCase()
var lowercaseText = "convert me to uppercase";

// Convert the string to uppercase, prints "CONVERT ME TO UPPERCASE"
console.log(lowercaseText.toUpperCase());

// toLowerCase()
var uppercaseText = "CONVERT ME TO LOWERCASE";

// Convert the string to lowercase, prints "convert me to lowercase"
console.log(uppercaseText.toLowerCase());

// Chain Methods
var mixedCaseText = "tHiS iS a MixEd cAsE StRiNg";

// Chain methods to capitalize the first letter and convert to uppercase
// Prints "This is a mixed case string" (capitalized and in uppercase)
console.log(mixedCaseText.charAt(0).toUpperCase() + mixedCaseText.slice(1).toLowerCase());
/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// indexOf
var text = "Hello World, welcome to the World of JavaScript";
console.log(text.indexOf("World")); // Should print the first occurrence index of "World" (6)

// lastIndexOf
console.log(text.lastIndexOf("World")); // Should print the last occurrence index of "World" (32)

// slice
var sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.slice(4, 9)); // Should print a slice from index 4 to 8 ("quick")

// repeat [ES6]
var exclamation = "Wow";
console.log(exclamation.repeat(3)); // Should print "WowWowWow"

// split
var fruits = "Apple,Orange,Banana,Mango";
console.log(fruits.split(",")); // Should print an array ["Apple", "Orange", "Banana", "Mango"]

// Using split to count words in a sentence
var paragraph = "This is a simple example sentence with several words.";
var wordCount = paragraph.split(" ").length;
console.log("Word count:", wordCount); // Should print the number of words in the sentence

// Handling multiple separators with split
var data = "apple,orange;banana|grape";
console.log(data.split(/[;,|]/)); // Should print an array ["apple", "orange", "banana", "grape"]
/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

// substring
var sentence = "The quick brown fox jumps over the lazy dog";

// Extract substring from index 10 to 14 ("brown")
console.log(sentence.substring(10, 15));

// Swap start and end if start > end, still extracts "brown"
console.log(sentence.substring(15, 10));

// Start < 0, it starts from 0, extracts "The quick"
console.log(sentence.substring(-5, 10));

// Use length to get the last character, extracts the last character ("g")
console.log(sentence.substring(sentence.length - 1));

// substr
var text = "This is a sample text.";

// Extract substring from index 5 with a length of 7 ("is a sa")
console.log(text.substr(5, 7));

// Start >= Length returns an empty string, extracts ""
console.log(text.substr(100, 5));

// Negative start from the end, extracts "text."
console.log(text.substr(-5, 5));

// includes [ES6]
var message = "Check if this message contains a keyword.";

// Checks if the string includes the value "message", prints true
console.log(message.includes("message"));

// Checks if the string includes the value "missing", prints false
console.log(message.includes("missing"));

// startsWith [ES6]
var sentence2 = "Once upon a time, there was a story.";

// Checks if the string starts with "Once", prints true
console.log(sentence2.startsWith("Once"));

// Checks if the string starts with "Time" from index 5, prints true
console.log(sentence2.startsWith("Time", 5));

// endsWith [ES6]
var file1 = "document.txt";
var file2 = "image.png";

// Checks if the string ends with ".txt", prints true
console.log(file1.endsWith(".txt"));

// Checks if the string ends with "image" from index 0 to 9, prints true
console.log(file2.endsWith("image", 9));
