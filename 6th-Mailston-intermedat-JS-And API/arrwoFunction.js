// arrow function
const  arrowFunction = (num1, num2) => num1 + num2;

const result = arrowFunction(55,50);

console.log(result);


const arrowFun = (num1,num2) => num1+num2;
const sum = arrowFun(25,25);
console.log(sum);


const fiveTimes = (num) => num *5;
const output = fiveTimes(10);
console.log(output);

//with out parameter.
const withOutParameter = () => 'Hi,i am arrwo function with out parameter';
const callFunction = withOutParameter();
console.log(callFunction); 



// when use multi line  use {} 

const multiLineArrowFunction = (a,b) =>{

    const sum = a+b;
    const diff = a-b;
    const result =  sum* diff ;
    return result;

}
const value = multiLineArrowFunction(50,5);
console.log(value);
 