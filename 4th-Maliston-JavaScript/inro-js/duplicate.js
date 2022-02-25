// const listNames = ['imran', 'arman', 'imon', 'imran', 'shuvo', 'poran', 'noyan', 'imran', 'arman', 'poran', 'noyan'];


// function removeDuplicate(listNames){
//     const uniqueItems = [];

//     for (const elements of listNames) {

//         console.log(elements);
        
//         if (uniqueItems.indexOf (elements) == -1){
            
//             uniqueItems.push(elements);
//         }
//     }

// }

// const duplicate = removeDuplicate(listNames);

// console.log(duplicate);
 

//reverse

const text = 'hello, I am reverse';

function reverseLetter( text){
        
    let letter='';
    for (const  word of text ){
            
        letter = word + letter;      
    }
    console.log(letter);
}
 const showReverse = reverseLetter(text);
 console.log(showReverse);