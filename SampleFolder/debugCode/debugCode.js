function performOperation(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    if (!isNaN(num1) && !isNaN(num2)){

        let result = multiply(num1, num2);
        let result2 = arithmeticOperations(num1, num2);
        
        displayResult(result, result2);
    } else {
        displayResult("Please, enter the valid numbers");
    }
}

function multiply(a, b){
    debugger;//debugger statement pauses execution

    return a * b;
}

function arithmeticOperations(a, b){
    debugger;
    return {addition: a + b, division: a / b};
}

function displayResult(result, result2){
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>The Multiplication result is: ${result}</p>
                                <p>The Addition result is: ${result2.addition}</p>
                                <p>The division result is: ${result2.division}</p>`;
}
