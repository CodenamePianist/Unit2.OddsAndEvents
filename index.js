// TODO: this file! :)

/*
Goal: When a user enters a number it will go in the number bank. When they hit one of the sort buttons, it will go in the odd or even field.

- When the user enters a number and hits `Add Number`, that value will be added to the Number Bank.
- When `Sort 1` is hit, then the first number will be sorted.
- When `Sort All` is hit, then all the numbers will be sorted to the appropriate field (Odd or Even).

Array numbers[]
    When the user hits `Add Number` or Enter/Return, the input value is pushed to this array

Array even[]
    If number % 2 is equal to 0, push number here

Array odd[]
    If number % 2 is not equal to 0, push number here

Function called addNumber
    Pushes a number into the numbers array

Function for Sort 1
    If the number at index 0 is even, pop it to even. If it is odd, send it to odd

Function for Sort All
    Will have to use a for loop to go through the numbers array and move numbers accordingly
*/

// === State ===

const numbers = [];
const even = [];
const odd = [];


//Get the number into the numbers array
function addNumber(number) {
    numbers.push(number);
}

// === Render ===

//The number added into the field will be added to the number array and then will appear in the Number Bank
function renderNumberBank(number) {
    const $output = document.querySelector("output");
    $output.textContent = number;
    $output.replaceChildren(...numbers);
}

function sortOne() {
    const $odds = document.querySelector("#odds output");
    const $evens = document.querySelector("#evens output");
    if (numbers[0] % 2 !== 0) {
        odd.push(numbers[0]);
        numbers.shift();
        $odds.textContent = numbers[0];
        $odds.replaceChildren(...odd)
    } else {
        even.push(numbers[0]);
        numbers.shift();
        $evens.textContent = numbers[0];
        $evens.replaceChildren(...even);
    }
};

function sortAll() {
    const $odds = document.querySelector("#odds output");
    const $evens = document.querySelector("#evens output");
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            odd.push(numbers[i]);
            $odds.textContent = numbers[i];
            $odds.replaceChildren(...odd);
        } else {
            even.push(numbers[i]);
            $evens.textContent = numbers[i];
            $evens.replaceChildren(...even);
        }
    }
    numbers.length = 0;
};

function render() {
    renderNumberBank();
}
// === Script ===

render();

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const $number = document.querySelector("#number");
    addNumber($number.value);
    $number.value = "";


    render();
})

const sortOneButton = document.querySelector("#sortOne");
sortOneButton.addEventListener("click", () => {
    sortOne();
    render();
})

const sortAllButton = document.querySelector("#sortAll");
sortAllButton.addEventListener("click", () => {
    sortAll();
    render();
})