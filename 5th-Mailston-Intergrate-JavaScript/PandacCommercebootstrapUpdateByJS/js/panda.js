
//title color 

document.getElementById('shoeh2').style.color='tomato';
document.getElementById('backpackh2').style.color='tomato';


//card color 
const allCard= document.getElementsByClassName('card')

for (const ChangeColor of allCard){

    ChangeColor.style.backgroundColor ='tomato';
    ChangeColor.style.border ='5px solid orange';
    ChangeColor.style.borderRadius ='20px';

}
//end

//lets say in Touch section 
 const sectionColor = document.getElementById('subscribe');
function changeBgColor (){

    sectionColor.style.backgroundColor='tomato';
}
//end

//le't say in section

document.getElementById('yourEmail').addEventListener('keyup', function(event){
    
    const button = document.getElementById('submit');

  if( event.target.value == 'email' ){

    button.removeAttribute('disabled');
  }
  else{

    button.setAttribute('disabled', true)
  };
});


 //remove button
  const btnRemove = document.getElementsByClassName('myButton');

    for (const btnHide of btnRemove) {

        btnHide.addEventListener('click',function(event){

            // document.getElementById('pandaBtn').removeChild('btnHide');

            event.target.parentNode.removeChild(event.target);
        });
    }
    // working




    // image hover
    function oldImage(){

        document.getElementById('shoe350').src ="images/shoes/shoe-1.png";
    }
    function hoverImage(){
   
        document.getElementById('shoe350').src ="images/shoes/shoe-3.png";
    }
    




