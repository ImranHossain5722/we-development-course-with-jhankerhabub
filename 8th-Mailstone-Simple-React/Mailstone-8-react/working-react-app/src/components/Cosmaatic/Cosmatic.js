import React from 'react';
import { addToDb } from '../../utilities/fackdb';
import './Cosmatic.css'
const Cosmatic = (props) => {
const {name,price,id}=props.cosmatic

const addToCart = (id)=>{
    addToDb(id)
}

    return (
        <div className='product'>
            <h2>Buy this: {name} </h2>
            <p>Price:$ {price}</p>
            <h5>id:{id}</h5>
            <button onClick={()=>addToCart(id)}>Add to cart </button>
        </div>
    );
};

export default Cosmatic;