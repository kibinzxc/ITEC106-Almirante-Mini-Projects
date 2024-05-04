function fibonacciIterative(numTerms) {
    let fibonacciSeries = [];
    

    let a = 0, b = 1, temp;
    fibonacciSeries.push(a);
    fibonacciSeries.push(b);
    
    for (let i = 2; i < numTerms; i++) {
        temp = a + b;
        a = b;
        b = temp;
        fibonacciSeries.push(temp);
    }
    
    return fibonacciSeries;
}

function validateInput(input) {
    if (!/^\d+$/.test(input) || parseInt(input) >= 100) {
        alert("Please enter a valid number less than 100.");
        return false;
    }
    return true;
}

function printFibonacciSequence() {
    let numTerms;
    do {
        numTerms = prompt("Enter the number of terms in the Fibonacci sequence:");
    } while (!validateInput(numTerms));

    numTerms = parseInt(numTerms);
    const fibonacciSeries = fibonacciIterative(numTerms);
    const output = "Fibonacci Series:\n" + fibonacciSeries.join(", ");
    alert(output);

 const runAgain = confirm("Do you want to run the program again?");
    if (runAgain) {
        printFibonacciSequence();
    }
}

printFibonacciSequence();
