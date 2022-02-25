const products =[
    'Dell laptop',
    'Starex montor laptop',
    'Yellow laptop',
    'Lg super laptop',
    'Camra Black mobile',
    'Dell camara amer'

]

const searching = 'laptop';
 const output = [];

 for(const product of products  ){

    if ( product.indexOf(searching) !=-1) {
            // output.push (product);
    }
 }

 //console.log(output);
 
 // using includes
 for(const product of products  ){

    if ( product.toLowerCase().includes(searching.toLowerCase())) {
        //    output.push (product);
    }
 }

 //console.log(output);
// Using StartsWith


const searchLap = 'Dell';
for(const product of products  ){

    if ( product.toLowerCase().startsWith(searchLap.toLowerCase())) {
          output.push (product);
    }
 }

 console.log(output);

