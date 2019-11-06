(function() {
    const calculatorMethods = {
        isPrime(num) {
            console.log('RAWR2');
            // my CS501 isPrime homework
            if (num === 0 || num === '0') {
                return false;
            }
            if (!num) throw 'Must Provide a number'
            if (typeof num !== 'number') throw 'Must provide a number'
            if (num === 1 || num === 0) {
                return false;
                // return `${number} is NOT a prime number.`;
            }
            for (let divisor = 2; divisor <= num / 2; divisor++) {
                if (num % divisor == 0) {
                    return false;
                    // return `${number} is NOT a prime number`;
                }
            }
            return true;
            // return `${number} is a prime number`;
        }
    };

    const staticForm = document.getElementById("static-form");
    console.log('RAWR');
    if (staticForm) {
        console.log("in here")
        const numba = document.getElementById('input');
        const attempts = document.getElementById("attempts");
        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName(
            "text-goes-here"
        )[0];
        // var resultContainer = document.getElementById("result-container");
        // var resultTextElement = resultContainer.getElementsByClassName(
        //     "text-goes-here"
        // )[0];
        console.log("done here")

        console.log(numba);
        console.log('random');

        staticForm.addEventListener("submit", event => {
            event.preventDefault();
            console.log('inEvent');

            try {
                console.log(errorTextElement);
                // document.getElementById("submit").onclick = function() { myFunction() };
                // errorContainer.style.visibilty = "hidden";        
                // resultContainer.style.visibilty = 'hidden';

                // Values come from inputs as strings, no matter what
                const inputNumber = numba.value;
                console.log(inputNumber);
                // if (inputNumber) {
                errorContainer.classList.add('hidden');
                //     $("#error").hide();
                //     $("#text_input").val('');
                // } else {
                //     // errorContainer.classList.remove("hidden");
                //     $("#error").show();
                // }
                const parsedNumberValue = parseInt(inputNumber);

                const result = calculatorMethods.isPrime(parsedNumberValue);
                console.log('RESULT is :', result);
                var ans = document.createElement("li");
                if (result === false) {
                    // document.createElement('li').classList.add('not-prime');
                    var temp = document.createTextNode(parsedNumberValue + ' is NOT a prime number.');
                    ans.classList.add('not-prime');
                } else {
                    // document.createElement('li').classList.add('is-prime');
                    var temp = document.createTextNode(parsedNumberValue + ' is a prime number.');
                    ans.classList.add('is-prime');
                }
                ans.appendChild(temp);
                document.getElementById("attempts").appendChild(ans);

                // resultTextElement.textContent = "The result is " + result;
                $("#static-form").trigger('reset');  
                // resultContainer.classList.remove("hidden");

            } catch (e) {
                $("#static-form").trigger('reset');  
                const  message  =  typeof  e  ===  "string"  ?  e  :  e.message;      
                errorTextElement.textContent  =  e;          
                errorContainer.classList.remove('hidden');
            }
        });
    }
})();