// concept-checklist 

// var numberVariable = 1234567890;
// /* Number of Variable*/
// console.log(typeof numberVariable);

// var stringVariable ='I am string variable';
// /* string of Variable*/
// console.log(typeof stringVariable);

//  var boolean  =( 10 > 50);
// /* boolean of Variable*/
//  console.log(typeof boolean);

//  var iAmObjectVariable = {
//      name:'mark',
//      age:26,
// };
// /* Object of Variable*/
// console.log(typeof iAmObjectVariable);



// //Simple Math operation

// var a =99;
// var b = 100; 
// var addition = a+b;
// /*Simple Addition Math */
// console.log (addition);

// var a =100;
// var b = 99; 
// var subtraction = a-b;
// /*Simple Subtraction Math */
// console.log (subtraction);


// var a =11;
// var b = 9; 
// var multiplication = a*b;
// /*Simple Multiplication Math */
// console.log (multiplication);


// var a =99;
// var b = 3; 
// var division = a/b;
// /*Simple Division Math */
// console.log (division);


// var a =99;
// var b = 2; 
// var modulus= a%b;
// /*Simple Modulus Math */
// console.log (modulus);
// /* ********** */


// // Comparison 

//  var a = 100;
//  var b = 50; 
// //  var  compar = a>b ;
// //   console.log(compar);

//     if (a > b ){
//         console.log('a is big ');

//     }else if ( a < b ) {
//         console.log('b is big ');
//     }else if(a == b) {
//         console.log(' a and b is equal is  true')
//     }else{
//         console.log('condition is working ');
//     };
       
    

  
// const arr = ['kana', 'imran', 'noy', 'poo', 'foo'] 

//  //arr.indexOf[0];
 
//  arr.push =('i am push');
// arr.unshift= ('i am unshift')
//  var arrlength = arr.length;
//  console.log(arr);

//for loop
//  const newArray =['mark', 'mobile', 'phone', 'camera','laptop', 'mouse' ]

// for (i=0; i < newArray.length ; i++){
  
// }
// console.log(newArray);


//  // object 
// let  newObject = {name: 'oppo', price:25000, storage:5, camera:50 } 

//     newObject.name='samsung';
 
//  console.log(newObject.price);


//  // while loop
 
//  var i=7;
   
//  while ( i <=  19  ){
        
//         console.log(i);        
//         i++;
//  }



// array 
    

function multiply (number1,number2,number3) {
    
    return number1*number2*number3;
 
};

var totalMultiply = multiply ( 11,5,6);
console.log(totalMultiply);


/* problem solving checklist  */

// feet to inch conversation
function feetToInch( feetToConvertInch){ 

    var inch = feetToConvertInch*12;

    return inch ;
}

 var myFeet = 50;
 var inch =  feetToInch (50);
 
 console.log('My Inch', inch );

// Centimeter to Meter


function centimeterToMeter(myCm){

 var myMeter = myCm/100;
 return myMeter;
 
}

    var myCm=50; 
    var myMeter =  centimeterToMeter (50);
console.log('My Meter', myMeter);


// calculation 
function pageRequirements( book1Pages, book2Pages, book3Pages ){

    const book1Quantity = 3;
      let totalBook1Pages = book1Pages*book1Quantity; 

    const book2Quantity = 1;
        let totalBook2Pages = book2Pages*book2Quantity;
    const book3Quantity = 2;
    let totalBook3Pages = book3Pages*book3Quantity;
    
     let totalAll3BooksPages = (totalBook1Pages + totalBook2Pages + totalBook3Pages) ;

            return totalAll3BooksPages;
}


var book1Pages = 100;
var book2Pages = 200;
var book3Pages = 300;
  
 let totalAll3BooksPages = pageRequirements (100,200,300,) ;

  console.log('Our total Pages print', totalAll3BooksPages);



  //bestFriend


 function bestFriend (){

        
 }
