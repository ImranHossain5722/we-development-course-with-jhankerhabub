fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))


function loadData(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( userLoad => displayUser(userLoad))
}

function displayUser(userLoad){
    const ul =document.getElementById('users')
    for(const loadUser of userLoad){

        const li = document.createElement('li');
        li.innerText  =`Name: ${loadUser.name} Email:- ${loadUser.email}` ;
        ul.appendChild(li);

    }
}



