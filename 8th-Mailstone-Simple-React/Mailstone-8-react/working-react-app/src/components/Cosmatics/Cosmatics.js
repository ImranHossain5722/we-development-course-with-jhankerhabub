import React, { useEffect, useState } from 'react';
import Cosmatic from '../Cosmaatic/Cosmatic';

const Cosmatics = () => {

    const [cosmatics, setCosmatics] = useState([])
    useEffect( ()=>{

        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setCosmatics(data) )
    },[])
    
    // const cosmatics= [
    //     {
    //       "id": "623bc2495e7b1b8b3401a85f",
    //       "index": 0,
    //       "guid": "cb36f51a-be0c-4e1f-84af-91cbb3b32575",
    //       "isActive": false,
    //       "balance": "$1,853.84",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 180,
    //       "eyeColor": "brown",
    //       "name": "Rebecca Short"
    //     },
    //     {
    //       "id": "623bc2492035464e5a25d43e",
    //       "index": 1,
    //       "guid": "fc37e7d6-ddcc-4639-a928-e4994674b202",
    //       "isActive": true,
    //       "balance": "$3,311.17",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 282,
    //       "eyeColor": "green",
    //       "name": "Rivers Caldwell"
    //     },
    //     {
    //       "id": "623bc2497e3704a05130b739",
    //       "index": 2,
    //       "guid": "cddf5ba8-6500-407e-bbc5-fac98bd5479a",
    //       "isActive": false,
    //       "balance": "$1,572.72",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 95,
    //       "eyeColor": "brown",
    //       "name": "Annabelle Cline"
    //     },
    //     {
    //       "id": "623bc249d0b991eba98ff819",
    //       "index": 3,
    //       "guid": "b109f8f5-66de-4d39-93d4-a88eb8c69658",
    //       "isActive": true,
    //       "balance": "$1,826.69",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 350,
    //       "eyeColor": "green",
    //       "name": "Browning Roy"
    //     },
    //     {
    //       "id": "623bc249f45819427b015832",
    //       "index": 4,
    //       "guid": "a0f80e2e-c38c-4847-86a7-ddf483a358c1",
    //       "isActive": true,
    //       "balance": "$1,655.65",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 273,
    //       "eyeColor": "brown",
    //       "name": "Priscilla Waters"
    //     }
    //   ]
    
    return (

        <div>
            {
                cosmatics.map( cosmatic => <Cosmatic key={cosmatic.id } 
                cosmatic={cosmatic}

                ></Cosmatic> )
            }
        </div>
    );
};

export default Cosmatics;