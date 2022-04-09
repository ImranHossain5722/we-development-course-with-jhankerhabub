
// use localStorage to mange cart data

const addToDb =(id)=>{
        // const qauntity = localStorage.getItem(id)

        // if (qauntity){
        //     const newQuantity = parseInt(qauntity) +1
        //     localStorage.setItem(id,newQuantity)
        // }else{

        //     localStorage.setItem(id,1)

        // }

  //now objact localStorage 

let shoppingCart={};

//get the shopping card 
const storeCart = localStorage.getItem('shopping-cart')
    if (storeCart){

        shoppingCart = JSON.parse(storeCart);

    }else{
        shoppingCart ={}

    }

//add quantity
const quantity = shoppingCart[id] 
if(quantity){

    const newQuantity = quantity +1

    shoppingCart[id]= newQuantity;
}else{

shoppingCart[id]=1;

}

localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
export {addToDb}