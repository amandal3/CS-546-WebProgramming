(function() {
    const calculatorMethods = {
        isPrime(number) {
          console.log('RAWR2');
            // my CS501 isPrime homework
            if (!number) throw 'Must provide a number'
            if (typeof number !== 'number') throw 'Must provide a number'
            if (number == 1 || number == 0) {
                return false;
            }
            for (let divisor = 2; divisor <= number / 2; divisor++) {
                if (number % divisor == 0) {
                    return false;
                    // return false;
                }
            }
            return true;
            // return true;
        }
    };

    const staticForm = document.getElementById("static-form");
    console.log('RAWR');
    if (staticForm) {
      const numba = document.getElementById('input');
      const attempts = document.getElementById("attempts");
      console.log(numba);
      console.log('RAWR2.5');
      }

        console.log(staticForm);
        console.log('RAWR3');

        staticForm.addEventListener("submit", event => {
            event.preventDefault();
            console.log('RAWR4');
                // Values come from inputs as strings, no matter what
            const inputNumber = document.getElementById("input").value;//returns null
            console.log(inputNumber);
            const parsedNumberValue = parseInt(inputNumber);

            const result = calculatorMethods.isPrime(parsedNumberValue);
            console.log('RAWR5');
            console.log('RESULT is :', result);
            var node = document.createElement("li");
            if (result === false) {

              // document.createElement('li').classList.add('not-prime');
              var temp = document.createTextNode(parsedNumberValue + ' is not a prime number young torts');
              node.classList.add('not-prime');
            } else {
            // document.createElement('li').classList.add('is-prime');
            var temp = document.createTextNode(parsedNumberValue + ' is a prime number young torts');
            node.classList.add('is-prime');
            }
            node.appendChild(temp);
            document.getElementById("attempts").appendChild(node);

        });
})();
