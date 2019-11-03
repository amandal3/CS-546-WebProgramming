(function() {
    const calculatorMethods = {
        isPrime(number) {
            if (!number) throw 'Must provide a number'
            if (typeof number !== 'number') throw 'Must provide a number'

            for (let divisor = 2; divisor <= number / 2; divisor++) {
                if (number % divisor == 0) {
                    return `${number} is not prime`;
                    // return false;
                }
            }
            return `${number} is prime`;
            // return true;
        }
    };

    function operationStringToFunction(operation) {
        if (!operation) throw "No operation provided";

        const returnFunction = calculatorMethods[operation];

        if (returnFunction === undefined) throw "No such operation";

        return returnFunction;
    }

    const staticForm = document.getElementById("static-form");

    if (staticForm) {
        attempts = document.getElementById("attempts");
    }

    staticForm.addEventListener("Submit", event => {
        event.preventDefault();

        try {
            // hide containers by default
            errorContainer.classList.add("hidden");
            resultContainer.classList.add("hidden");

            // Values come from inputs as strings, no matter what
            const inputNumber = inputNumber.value;
            const parsedFirstNumberValue = parseInt(firstNumberValue);

            const result = isPrime(input);

            resultTextElement.textContent = "The result is " + result;
            resultContainer.classList.remove("hidden");
        } catch (e) {
            const message = typeof e === "string" ? e : e.message;
            errorTextElement.textContent = e;
            errorContainer.classList.remove("hidden");
        }
    });
})();