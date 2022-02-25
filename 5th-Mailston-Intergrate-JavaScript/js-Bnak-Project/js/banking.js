
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
   
   })