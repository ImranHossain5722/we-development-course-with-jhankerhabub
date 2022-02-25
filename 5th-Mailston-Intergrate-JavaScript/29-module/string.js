const anthem = 'Amar Sonar Bangla Ame tomai Valobashi' ;

// using split
const withoutA = anthem.split('a')
const word = anthem.split(' ');
console.log(withoutA);

// using slice
const small = anthem.slice(5,11);
console.log(small);

// using substr

const subLeaning = anthem.substr(11, 8) ;

console.log(subLeaning);