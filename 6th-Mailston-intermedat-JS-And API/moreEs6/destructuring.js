const fish = {id: 58, name: 'king hilsha', price:9000, phone: 0987643, address:'chanpur', dress: 'silver'};

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;

// Learning Destructuring
// const {phone, price,dress, id,} = fish;
// console.log(fish);


const company = {
    name:'imranDeveloper',
    info:{id:5,name:'js'},
    address:{location:'bd', employ:22,},
};

const {id, name, } = company.info;
const {location, employ} = company.address

// console.log(id,name, location, employ); 

//more destructuring

// array destructure
const [a,b,c ] = [20, 50, 30, 250,];
console.log(a,b,c);


