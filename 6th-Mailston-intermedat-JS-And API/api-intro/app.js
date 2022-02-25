const user ={
    id:01, name:'imran', job:'dev'
}

const userString = JSON.stringify(user);
console.log(userString);

const convert = JSON.parse(userString);
console.log(convert);

