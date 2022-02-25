
 const header = document.getElementById('topHeader').style.color=' rgb(255, 20, 1) ' ;



document.getElementById('addNew').addEventListener('click', function(){
    const li =  document.createElement('li');
    li.innerText ='List ite'
  const liPlace=  document.getElementById('ul')
    liPlace.appendChild(li);

})


/* 
function increaseNum(){

const inputValue = document.getElementById('idZero');
    let valueInput = inputValue.value;

    if(increaseNum == true ){

        valueInput = parseInt(valueInput) + 1 ;


    }
    inputValue.value = valueInput ;
 
} */

document.getElementById('increaseZero').addEventListener('click', function(){

       const inputFiled = document.getElementById('idZero');
      const button  =  document.getElementById('increaseZero');
       const inputValue = inputFiled.value;
        inputFiled.value = parseInt(inputValue) + 1;

    



              

});



document.getElementById('idZero').addEventListener('change' , function(event){

    const pressBtn = document.getElementById('increaseZero');

    if( event.target.value < 5 ) {
    
      pressBtn.removeAttribute('disabled', false);

    }else{

     //pressBtn.removeAttribute('disabled');

       pressBtn.setAttribute('disabled', true)

      }; 

  })   