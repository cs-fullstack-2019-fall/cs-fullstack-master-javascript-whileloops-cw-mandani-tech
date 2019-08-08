// # JavaScript-whileloops-cw
// Classwork: JavaScript While/Do While Loops
//
// ### Create a new file for each exercise
//
// #### CW1
// Print -10 through 5 using a counter and while loop.

var i=-10;

while(i<=5)

{
    console.log(i);
    i++;
}




//     #### CW2
// Write a While loop that counts backwards from 10 to 0
// Log the current count at the end of each iteration EXCEPT if the current count is ```5```
//
// HINT: Use ```continue```

var x = 10;
//var flag= true;

while(x >= 0) {
    if (x === 5)
    {


        x--;
    }
    else
        {
        console.log(x);
        x--;
        }
}


//
// #### CW3
// Asks the user ```Enter a word. Enter 'q' to quit.``` Create a while loop that will not quit until they enter 'q'.
//
//     HINT: Use ```true``` condition so loop continues forever and ```break``` to exit the loop
//



var wordUser =prompt("Enter your word:");

while (wordUser!=="q")

    {

    wordUser=prompt( "Please press q to quit");

   }

//
// #### Extra
// Expand your knowledge of Loops by reading the Loop and Iteration section on MDN:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
