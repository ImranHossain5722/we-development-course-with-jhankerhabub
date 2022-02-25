// problem: 1 anaToVori. 

function anaToVori (myAna) {

        //16 ana = 1 vori
    var vori = myAna/16 ;  

    return vori ;
}
    var vori = anaToVori (50);
    console.log(vori);



// problem:2 
 function pandaCost (singaraPrice, somochaPrice, jalapiPrice){
        
     var singraQuantity = 10;
     let totalSingraPrice = singaraPrice*singraQuantity;
    
    var somochaQuantity =12;
     let totalSomomchaPrice = somochaPrice*somochaQuantity;

    var jalapiQuantity = 10;
     let totalJalapiPrice= jalapiPrice*jalapiQuantity;
        // total all food Cost
     let totalAllFoodPrice= (totalSingraPrice + totalSomomchaPrice + totalJalapiPrice);
 
     return totalAllFoodPrice;
}

var singaraPrice = 7;
var somochaPrice = 10;
var jalapiPrice =  15;
var totalAllFoodPrice = pandaCost (7,10,15);
console.log(totalAllFoodPrice);



 // problem:3 

 function picnicBudget(totalPerson) {
    var first100perPersonCost = 5000 ;
    var second100perPerson = 4000;
    var third100PerPersonCost= 3000;
   
    if (totalPerson <= 100 ){
       
         var first100PersonTotalCost = totalPerson*5000;
         return first100PersonTotalCost;

    } else if(totalPerson <= 200 ){

        var first100PersonTotalCost = 100 * first100perPersonCost
        var afterfirsrt100personCost= totalPerson - 100;
        var second100PersonTotalCost = afterfirsrt100personCost*second100perPerson ;
       
        return second100PersonTotalCost;
    }
    else {

        var first100PersonTotalCost= 100 * first100perPersonCost;
        var second100PersonTotalCost = 100*second100perPerson ;
        var afterSecond100perPersonCost = totalPerson-200;
        var third100PersonTotalCost= afterSecond100perPersonCost* third100PerPersonCost;
            //total all person picnic cost
        var totalAllPersonCost = first100PersonTotalCost + second100PersonTotalCost + third100PersonTotalCost
        return totalAllPersonCost;
 
    }
}
 var totalAllPersonCost = picnicBudget(253);
 console.log(totalAllPersonCost);




//Problem:4

 function oddFriend (friends) {
    //new array
    let oddFriendName =[];

    for (let i = 0; i < friends.length; i++){
            let myFriend = friends[i].length;
                 
            if( myFriend % 2 != 0 ){
                oddFriendName.push(friends[i])
                
            }
              
        
             
    }   
    return oddFriendName[0]; 
 
}


 var friends = [ 'arman', 'imran',  
 'imon' ,'abul']; 

 var oddFriendName = oddFriend (friends);
 console.log(oddFriendName);
 