(function() {
    const calculatorMethods = {
        isPrime(number) {
            // my CS501 isPrime homework 
            if (!number) throw 'Must provide a number'
            if (typeof number !== 'number') throw 'Must provide a number'
            if (number == 1 || number == 0) {
                return `${number} is NOT a prime number.`
            }
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
            const parsedNumberValue = parseInt(inputNumber);

            const result = isPrime(parsedNumberValue);
            console.log('RESULT is :', result);

            for (let j = 0; j < result.length; j++) {
                if (result[j].includes('NOT')) {
                    // document.createElement('li').classList.add('not-prime');
                    var isFalse = document.createElement('li');
                    var temp = isFalse.classList.add('not-prime');
                    attempts.appendChild(temp);
                } else {
                    // document.createElement('li').classList.add('is-prime');
                    var isTrue = document.createElement('li')
                    var temp = isTrue.classList.add('is-prime');
                    attempts.appendChild(temp);
                }
            }

            resultTextElement.textContent = "The result is " + result;
            resultContainer.classList.remove("hidden");
        } catch (e) {
            const message = typeof e === "string" ? e : e.message;
            errorTextElement.textContent = e;
            errorContainer.classList.remove("hidden");
        }
    });
})();