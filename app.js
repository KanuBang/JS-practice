console.log(
"Now I will make a program showing the sum of quotient and remainder"
);

console.log(
"And feel the necessity of return through this program"
);

const num = 10;
const divide = 3;

const calculator = {
   
    calculateQuotient : function (target, divider) {
        return target / divider;
    },

    calculateRemainder : function (target, divider) {
        return target % divider;
    }

}

const sum =  calculator.calculateQuotient(num,divide) + calculator.calculateRemainder(num,divide);
console.log("The quotient is " + calculator.calculateQuotient(num,divide));
console.log("The remainder is " + calculator.calculateRemainder(num,divide));
console.log("The sum of quotient and remainder is " + sum);


