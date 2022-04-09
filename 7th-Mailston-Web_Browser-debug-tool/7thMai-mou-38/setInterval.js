// setInterval

// setInterval(() => {
//     console.log('tk tok tik tok')

// }, 1000);

 let second = 0
const timeStop = setInterval(()=>{
    second++;
    if( second > 12){
        

        clearInterval(timeStop)
    }
    console.log(second);
},2000)

