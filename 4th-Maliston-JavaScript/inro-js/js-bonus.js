// for( let i= 1; i<6; i++){

//     console.log(i);
// }

// function Learn recursion

function learnRecursion(i){

    if(i>5){
        return;
    }
    learnRecursion(i+1);
    console.log(i);

}

learnRecursion(1);

//Understand recursion using sum of numbers

function sum (i){
    if (i==1){
        return 1;
    }

    return i+ sum(--i);

}
console.log(sum(5));

//Explore Factorial Recursion using a for loop concept
//for loop.
// let factorial =1;
// for (let i =4; i>=1; i-- ){

// factorial = factorial*i;
// }
// console.log(factorial);

// Using recursion

function factorial (i){
 if(i==1){
     return 1;
 }
  return i* factorial(--i)

}
console.log(factorial(4));
//23_5-4 (advanced) Find the matching product by searching products

const products =[
    {name:'del laptop', price:50000},
    {name:'lenovo laptop', price:40000},
    {name:'Ascus laptop', price:35000},
    {name:'samsung laptop', price:60000},
    {name:'hp laptop', price:70000},
    {name:'smart watch ', price:5000},
    {name:'apple watch', price:8000},
]

 function searchProducts (products, searchText){

    const result =[];

    for (const product of products){
            if( product.name.includes(searchText)){
                result.push(product);
            }
        
    }
    return result;
 }
  const match = searchProducts(products, 'laptop' );
  console.log(match);

  // 23_5-5 Explore break and continue for selecting some products
 
  // break 
//   const breakProducts =[
//     {name:'del laptop', price:50000},
//     {name:'lenovo laptop', price:40000},
//     {name:'Ascus laptop', price:35000},
//     {name:'samsung laptop', price:60000},
//     {name:'China watch ', price:4000},
//     {name:'hp laptop', price:70000},
//     {name:'smart watch ', price:5000},
//     {name:'apple watch', price:8000},
// ]

//   for(const product of breakProducts ){
//     if (product.price<5000){
//         break;
//     }
//     console.log(product);
//   }

    // continue 
    const continueProducts =[
        {name:'del laptop', price:50000},
        {name:'lenovo laptop', price:40000},
        {name:'Ascus laptop', price:15000},
        {name:'samsung laptop', price:60000},
        {name:'China watch ', price:4000},
        {name:'hp laptop', price:70000},
        {name:'smart watch ', price:5000},
        {name:'apple watch', price:8000},
    ]
    
      for(const product of continueProducts ){
        if (product.price<10000){
            continue;
        }
        console.log(product);
      }
