let width
let length

function calculateArea(){
    length = parseFloat(document.getElementById('lenght').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area is: ${area}`;
}

let amountOne, amountTwo, amountThree;

function calculateTotal(){
    amountOne = parseFloat(document.getElementById('groceryOne').value);
    amountTwo = parseFloat(document.getElementById('groceryTwo').value);
    amountThree = parseFloat(document.getElementById('groceryThree').value);

    total = amountOne + amountTwo + amountThree;

    document.getElementById('resultTwo').innerText = `The total amount is: ${total}`;
}