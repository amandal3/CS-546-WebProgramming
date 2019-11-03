(function() {
    const calculatorMethods = {
        isPrime(number) {
            if (!number) throw 'Must provide a number'
            if (typeof number !== 'number') throw 'Must provide a number'

            for (let divisor = 2; divisor <= number / 2; divisor++) {
                if (number % divisor == 0) {
                    return `${number} is NOT a prime number`;
                    // return false;
                }
            }
            return `${number} is a prime number`;
            // return true;
        }
    };

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