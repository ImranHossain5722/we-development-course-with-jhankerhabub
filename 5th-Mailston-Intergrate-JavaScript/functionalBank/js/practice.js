document.getElementById('deposit-button').addEventListener('click', function(){

const depInput = document.getElementById('deposit-input');
const depositInputFiledText = depInput.value ;
const depositAmount = parseFloat(depositInputFiledText);


const depositTotal = document.getElementById('dposit-total');
const depositTotalAmountText = depositTotal.innerText;
const depositTotalOldAmount = parseFloat(depositTotalAmountText);

depositTotal.innerText = depositAmount + depositTotalOldAmount ; 

//amount add balance
 const oldBalanceTotal = document.getElementById('blance-total');

const oldBalanceTotalText = oldBalanceTotal.innerText;
const oldBalanceTotalAmount = parseFloat(oldBalanceTotalText);

oldBalanceTotal.innerText = oldBalanceTotalAmount + depositAmount ;


// clear filed
depInput.value='';

})

//Withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){

const withdrawInput = document.getElementById('withdraw-input');
const withdrawInputFiledText = withdrawInput.value;
const withdrawAmount = parseFloat(withdrawInputFiledText);

const withdrawTotal = document.getElementById('withdraw-total');
const withdrawTotalText = withdrawTotal.innerText;
const withdrawTotalOldAmount = parseFloat(withdrawTotalText);

withdrawTotal.innerText = withdrawAmount +withdrawTotalOldAmount;
    // clear withdraw filed
withdrawInput.value = '';

// balance update

const oldBalanceTotal = document.getElementById('blance-total');

const oldBalanceTotalText = oldBalanceTotal.innerText;
const oldBalanceTotalAmount = parseFloat(oldBalanceTotalText);

oldBalanceTotal.innerText = oldBalanceTotalAmount - withdrawAmount

});


