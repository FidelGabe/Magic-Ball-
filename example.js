/** For the following, refer to the index.html for the ids **/

// Grab the "Ask Away" button by its id:
//   1) Create a variable called "submitButton"
//   2) The value will be using getElementById
//   3) Use the id from the submit input
var submitButton = document.getElementById("submit");

// Give "submitButton" a click event to output:
//   1) Grab the "submitButton" variable
//   2) Use the dot notation
//   3) Use the addEventListener() method
//   4) Set the type to "click"
//   5) Set the listener to "output"
submitButton.addEventListener("click", showOutput);

// Create a function that will output an answer:
//   1) Create a function called output
//   2) Give it 1 paramater called "event"
function showOutput(event) {
    event.preventDefault()
    let question = document.getElementById("question").value;
    let output = document.getElementById("output");
    let responds = ["sure", "for sure", "potential", "maybe", "not likely", "likely", "not sure", "will see"];
    let randomIndex = Math.floor(Math.random() * responds.length);

    if (question.length == 0) {
        output.style.color = "red";
        output.innerText = "No input Try again"

    }
    else {
        output.style.color = "white";
        output.innerText = responds[randomIndex];
    }
}
// Inside function:
//   3) Prevent the page from loading                     [["event" & preventDefault()]]
//   4) Create a variable that stores the user's input    [[question id & value]]
//   5) Create a variable that stores the <p>             [[output id]]
//   6) Create a variable that stores an array with 8 random magic ball outputs
//   7) Create a variable that stores a random index from 0-7     [[Math.floor(), Math.random() & length]]
//   8) Create an if statement
//         - If the length of the users input is 0          [[length]]
//         - { then make the color of the text red          [[style.color]]
//             & change the text to "No input, try again!"} [[innerText]]
//         - else
//         - { then make the color of the text rgb(115, 28, 133)  [[style.color]]
//             & change the text to random array string}    [[innerText & access array]]

// [[ Anything in here are hints! ]]


