const number = [ 4, 5, 6, 7, 3, 20 ];
const output = [];


const squares = number.map ( x => x*x);
console.log(squares);


//
const products = [

    {name:'Mouse' , Price: 500, color: 'black'},

    {name:'water bottle' , Price:100 , color: 'blue'},
    {name:'flower pot' , Price: 50, color: 'Mate'},
    {name:'Laptop' , Price: 50000, color: 'Sliver'},
]

const productName = products.map( pd => pd.name);
const productPrice = products.map( pd => pd.Price);

console.log(productName, productPrice);

