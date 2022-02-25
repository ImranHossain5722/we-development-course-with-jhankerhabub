// function declaration 
// function startFna(){

//     console.log('press the switch')
// }

//function name
//startFna();






// parameter

function singaraAn(mony){

    console.log('singra khamu');
    console.log('mama singara dan');
    var singraPrice = 5;
    var singraQuantity =  mony / singraPrice;

    return singraQuantity;


}
var mony = 50;

var singara = singaraAn(mony);

console.log('ai nen singra', singara, 'pic');


// anther function  byog koro 
function byogKoro (num1, num2,){

    var result = num1 - num2;
    return result; 
}


var total= byogKoro(100,90);

console.log ('total byog fol holo ', total)