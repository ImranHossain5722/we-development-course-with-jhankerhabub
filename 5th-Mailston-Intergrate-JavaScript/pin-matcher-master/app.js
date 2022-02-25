function getPin(){

    const pin = Math.round(Math.random()*10000);
    const pinString  = pin + '';    
    
    if (pinString.length == 4 ){

        return pin ;
    }else{

        // console.log('3pin', pin );
        return getPin();
    }

   
} 

function generatePin(){
 
     
    const pin = getPin();
    document.getElementById('displayPin').value = pin ;


}

document.getElementById('keypad').addEventListener('click', function(event){

    const number = event.target.innerText;

     const calcInput = document.getElementById('type-number'); 

     if (isNaN (number)) {
        if (number == 'C'){

            calcInput.value ='';
        }

     }
     else{
        const previousNumber =calcInput.value;
        const newNumber = previousNumber + number;
         calcInput.value = newNumber;  


     }
    
})


function verifyPin(){

 const pinIn = document.getElementById('displayPin').value;
 const calcIn = document.getElementById('type-number').value;

 const success = document.getElementById('notify-pass');
 const failError = document.getElementById('notify-fail');

 if (pinIn == calcIn ){

  
    success.style.display ='block'
    failError.style.display ='none';
 }
 else{
   
    failError.style.display ='block';
    success.style.display ='none'
}

}
    
