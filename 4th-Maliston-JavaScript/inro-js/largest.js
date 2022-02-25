function lergestElement (num){
    let biggest = num[0];
  for ( let i = 0; i<num.length; i++ ){

    const element = num[i];
    if(element  > biggest ){

        biggest = element;
      }
  }  
  return biggest;
}
let   ages = [50, 85, 90, 45, 44, 21];
let biggest = lergestElement(ages);
console.log(biggest );