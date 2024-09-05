// collect some references to our elements
const input = document.querySelector("#name-input")
const button = document.querySelector("#submit-button")
const greeting = document.querySelector("#greeting")
const keyOutput = document.querySelector("#current-key")

// greet user by name when the button is clicked
button.addEventListener("click", function() {
    const name = input.value ;
    greeting.innerHTML = `Hello, ${name}!`
})

// display each key as it is pressed down
document.addEventListener("keydown", function(event) {
    keyOutput.innerHTML = `Key: ${event.key}`
})