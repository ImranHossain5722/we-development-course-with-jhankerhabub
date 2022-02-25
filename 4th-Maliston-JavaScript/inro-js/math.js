// const myNumber = -5;
// const output = Math.abs(myNumber);

// console.log(output);

 var i = [5, 8, 50, 85, 90,]

var check = i

//console.log(check);

function findSmall(first, second, three){

    if (first<second){

        return first;
    } else if (second < three ) {

        return second;
        
    } else {
        
        return three;
    }

}

var small = findSmall(30,20, 10);
//console.log ('Small number is', small);

// sum .....


const num = [ 44, 55,89,2,96,68,20,30,];

let sum =0;
for (let i = 0; i < num.length ; i++) {

    const element = num[i];
    sum = sum + element;

}
console.log(sum);