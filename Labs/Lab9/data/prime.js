let exportedMethods = {
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

module.exports = exportedMethods;