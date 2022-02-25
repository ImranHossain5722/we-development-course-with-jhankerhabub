// red function
function makeRed(){
    document.body.style.backgroundColor ='red';
}

// Anther Method to add onclick
//Call getElementById
const btn = document.getElementById('blueButton');
//set the onclick in button
btn.onclick=blueColor ;
//blue button function
function blueColor (){
    document.body.style.backgroundColor ='blue'

}

// using anonymous function
const greenbtn = document.getElementById('greenButton');
        greenbtn.onclick = function(){
            document.body.style.backgroundColor='green'
        }

// using addEventListener

const goldenbtn = document.getElementById('goldenRodButton');
      goldenbtn.addEventListener('click', makegold);
      function makegold(){

        document.body.style.backgroundColor='goldenrod'
      }

// using addEventListener function

const pinkbtn =document.getElementById('pinkButton');
      pinkbtn.addEventListener('click', function(){
          document.body.style.backgroundColor='hotpink'
      })

 // shortCut code 
     
 document.getElementById('lightBlue').addEventListener('click', function(){
    document.body.style.backgroundColor='lightblue'
})

//show text function
function showText(){
    const pt = document.getElementById('text');
    pt.innerText ='Hello How are you?';
}
    //direct
document.getElementById('btnText2').addEventListener('click', function(){

    const pt = document.getElementById('text');
    pt.innerText =' hello I am imaran hossain ';
})


// input value function

document.getElementById('update').addEventListener('click', function(){

    const nameField =document.getElementById('inputText');
    
    const pt = document.getElementById('text');
    pt.innerText = nameField.value ;
    nameField.value='';
})

// Creat a comment box 
document.getElementById('commentSubmit').addEventListener('click', function(){

    const newComment = document.getElementById('commentBox');

    const p = document.createElement('p');
    p.innerText = commentBox.value;

    const commentPlace = document.getElementById('section');
    commentPlace.appendChild(p);
    commentBox.value='';
})


// set write delete confirm than delete

document.getElementById('delet-btn').addEventListener('click', function(){

          document.getElementById('info').style.display='none'
        })

        // focus addEventListener 
        document.getElementById('deletConfirm').addEventListener('focus', function(){
          document.body.style.backgroundColor='lightcoral';
        })
        // blur addEventListener 
        document.getElementById('deletConfirm').addEventListener('blur', function(){
          document.body.style.backgroundColor='white';
        })

        // keyup addEventListener 
        document.getElementById('deletConfirm').addEventListener('keyup', function(event){
          const deleteBtn = document.getElementById('delet-btn');

          if( event.target.value =='delete'){

              deleteBtn.removeAttribute('disabled');
          }
          else{

            deleteBtn.setAttribute('disabled', true)
          };    
        })
  //end

  


  