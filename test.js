// // //writing my first javascript

// // // Write a function called "checkAge". Given a person's name and age, "checkAge" returns one of two messages: "Go home, {insert_name_here}!",
// // if they are younger than 21. "Welcome, {insert_name_here}!",
// // if they are 21 or older. Naturally, replace "{insert_name_here}" with the given name. :)

// Output

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'

// Create a dunction signature

function checkAge(name, age) {
    // Check whether the age is 21 
    return age >= 21 ? "welcome, " + name + "!" : "go back home, " + name + "!";
    // if age is 21 welcome message should be displayed
    // if not go back to home

};
console.log(checkAge("Ajay", 27));
console.log(checkAge("Louis", 20));
