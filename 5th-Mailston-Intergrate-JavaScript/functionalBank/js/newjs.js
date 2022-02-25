// for all input filed  
function getInputValue(inputId){

 const InputField = document.getElementById(inputId);
 const inputAmountText = InputField.value;
 const inputAmount = parseFloat( inputAmountText);    
 // clear inputField
 InputField.value='';
 return inputAmount;

};


function totalAllFiled (totalFieldId, Amount){

    const totalAll= document.getElementById(totalFieldId);
    const totalAmountText=totalAll.innerText;
    const oldDepositAmount= parseFloat(totalAmountText); 

     totalAll.innerText= oldDepositAmount + Amount;
  
}

 
// update balance function

function upDateBalance(Amount, isAdd){

    const balanceTotal = document.getElementById('blance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const oldBalanceTotal = parseFloat(balanceTotalText);
    const oldBalanceTotal = getCurrentBalance();
    if(isAdd == true ){
        balanceTotal.innerText =oldBalanceTotal + Amount
    }
    else{
        balanceTotal.innerText =oldBalanceTotal - Amount
    }

}

function getCurrentBalance(){

    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const oldBalanceTotal = parseFloat(balanceTotalText);
   return oldBalanceTotal;

 }
 

// deposit 
document.getElementById('deposit-button').addEventListener('click', function(){

const depositAmount = getInputValue('deposit-input');
if (depositAmount > 0 ){

    totalAllFiled('dposit-total', depositAmount);
    upDateBalance(depositAmount,true);   
}

})


// withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){

const withdrawInputAmount= getInputValue('withdraw-input');

const CurrentBalance = getCurrentBalance();

if(withdrawInputAmount > 0 && withdrawInputAmount < CurrentBalance  ){

    totalAllFiled('withdraw-total',withdrawInputAmount );
    upDateBalance(withdrawInputAmount,false);
    
}
});
/* short Code End  */




/*
// 
document.getElementById('deposit-button').addEventListener('click', function(){

 const depInput = document.getElementById('deposit-input');
 const depositAmountText = depInput.value;
 const depositAmount = parseFloat( depositAmountText);

    const depositTotal= document.getElementById('dposit-total');
    const depositTotalText=depositTotal.innerText;
    const oldDepositAmount= parseFloat(depositTotalText); 

     depositTotal.innerText= oldDepositAmount + depositAmount;
    // add balance
     const balanceTotal = document.getElementById('blance-total');
     const balanceTotalText = balanceTotal.innerText;
     const oldBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText =oldBalanceTotal + depositAmount


    // clear inputField
     depInput.value='';
})




// withdraw 


document.getElementById('withdraw-button').addEventListener('click', function(){

 const withdrawInput = document.getElementById('withdraw-input');

  const withdrawInputText =withdrawInput.value;
  const withdrawInputAmount= parseFloat(withdrawInputText);

  //withdraw
 const withdrawTotal = document.getElementById
 ('withdraw-total');
 const withdrawTotalText= withdrawTotal.innerText;

 const withdrawTotalAmount = parseFloat(withdrawTotalText);
 withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;

 // Update Balance after Withdraw.
    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText= balanceTotal.innerText; 
    
    const oldBalanceTotalAmount = parseFloat(balanceTotalText) ;

    balanceTotal.innerText= oldBalanceTotalAmount - withdrawInputAmount;
    //clear filed
    withdrawInput.value='';

});


*/