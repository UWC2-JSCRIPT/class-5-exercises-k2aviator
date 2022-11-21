
// set locations

const buttons = document.querySelectorAll('.button');
const incButton = document.querySelector('#increase');
const decButton = document.querySelector('#decrease');
const messageLoc = document.querySelector('#count');

let counter = 0
messageLoc.innerText = "Count: " + counter

// When a user clicks the + element, the count should increase by 1 on screen.

incButton.addEventListener('click',() => {
    counter++;
    messageLoc.innerText= "Count: " + counter
    console.log(counter)
})


// When a user clicks the – element, the count should decrease by 1 on screen.


decButton.addEventListener('click',() => {
    counter--;
    messageLoc.innerText= "Count: " + counter
    console.log(counter)
})
