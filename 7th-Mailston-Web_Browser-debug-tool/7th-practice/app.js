const priceBtn =() => {
  
const proName = document.getElementById('ProName').value
// const proPrice = document.getElementById('ProPrice').value

showUi(proName)
//console.log(proName);
// add local storage
addProductToCart(proName)

//
document.getElementById('ProName').value="";
}
const showUi=(proName)=> {

    //console.log(proName , proPrice );

    const showDisplay = document.getElementById('showVlaue')
    const div =document.createElement('div')
    div.innerText = proName;
    
    showDisplay.appendChild(div)
}
const getCart=()=>{

    const cart = localStorage.getItem('cart');
    let cartObject;

    if(cart){
            cartObject = JSON.parse(cart)
    }else{

        cartObject= {};
    }
    return cartObject;
}

const addProductToCart = proName =>{

    const cart = getCart ();
    cart [proName] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
    

}
