
/* // for Silicone Mobile case function
function updateCaseNumber(increase ){
    const caseInput = document.getElementById('case-number');
  let caseNumber =  caseInput.value ;
    
    if( increase == true){

        caseNumber = parseInt(caseNumber) + 1;

    }else if(caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber ;
    // update product Price

  const casePrice = document.getElementById('caseTotal')
  casePrice.innerText = caseNumber * 1000 ;


} */

// withe a share-function now 

function updateCaseNumber(product, price, increase ){
  const caseInput = document.getElementById ( product + '-number');
let caseNumber =  caseInput.value ;
  
  if( increase == true){

      caseNumber = parseInt(caseNumber) + 1;

  }else if(caseNumber > 0) {
      caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber ;
  
  // update product Price
  const casePrice = document.getElementById(product + '-Total')
 casePrice.innerText = caseNumber * price ;

    //calculate function called
      calculateTotal();

};
// calculate 

function getInputValues (product){

 const productInput = document.getElementById( product + '-number');
 const productNumber = parseInt( productInput.value );
  return productNumber ;
};

function calculateTotal(){
 const phoneTotal = getInputValues ('case') * 1000 ;
 const caseTotal = getInputValues ('caseSilicone') * 59;
 const subTotal = phoneTotal + caseTotal ;
 const tax = subTotal / 10 ;
 const totalAmount = subTotal + tax ;
// update on the html subTotal
 document.getElementById('sub-total').innerText = subTotal ;
 document.getElementById('tax').innerText = tax ;
 document.getElementById('grandTotal').innerText = totalAmount ;

};


//Case  plus button
document.getElementById('case-plus').addEventListener('click', function(){

    /* const caseInput = document.getElementById('case-number');
  const caseNumber =  caseInput.value ;
    caseInput.value = parseInt(caseNumber) + 1;
 */
    updateCaseNumber('case', 1000, true);
})

// Case minus button
document.getElementById('case-minus').addEventListener('click', function(){
    /* const caseInput = document.getElementById('case-number');
  const caseNumber =  caseInput.value ;
    caseInput.value = parseInt(caseNumber) - 1;
 */
    updateCaseNumber('case', 1000, false);
})


// for Iphone black products function

/*  function iPhoneUpdate(increasePhone){

        const phoneUpdateFiled =document.getElementById('caseSilicone-number');
    let phoneTotalNumber = phoneUpdateFiled.value;   

     if(increasePhone == true ){

        phoneTotalNumber = parseInt(phoneTotalNumber) + 1;

     }else if( phoneTotalNumber > 0) {

        phoneTotalNumber = parseInt(phoneTotalNumber) - 1 ;
        
     };
     phoneUpdateFiled.value = phoneTotalNumber ;

        // phonePrice calculate
     const phonePrice =document.getElementById('caseSiliconPrice');

    phonePrice.innerText = phoneTotalNumber *59 ;
 

} 
 */

// Phone plus button
document.getElementById('caseSiliconePlusBtn').addEventListener('click',function(){
    
  updateCaseNumber('caseSilicone', 59, true);

});
// Phone minus button
document.getElementById('caseSiliconeMinusBtn').addEventListener('click',function(){
    
  updateCaseNumber('caseSilicone', 59, false);

})
