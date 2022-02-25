function loadPost(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(loadPost => displayPost(loadPost) )
}
loadPost();
function displayPost(loadPost){

     const sectionBox = document.getElementById('sectionPost')

     for (const showPost of loadPost ){
     
     const div = document.createElement('div')
     div.classList.add('post')
      div.innerHTML = 
      ` <h3>${showPost.title} </h3>
        <p>${showPost.body}</p>
      `
      sectionBox.appendChild(div);

     }

}



// album data load

function album(){

    fetch('https://jsonplaceholder.typicode.com/albums')

    .then(response=> response.json())
    .then (loadAlbum => showAlbum(loadAlbum))
}

album();

function showAlbum(loadAlbum){

const albums =document.getElementById('albumSection')

for (const img of loadAlbum ){

    const p = document.createElement('p')
    p.innerText = img.title
    albums.appendChild(p) 




}


}


