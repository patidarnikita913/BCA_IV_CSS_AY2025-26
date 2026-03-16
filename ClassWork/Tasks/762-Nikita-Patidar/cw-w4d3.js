// const today=new Date;
// console.log(today);

// const birthday =new Date(1990,8,9);
// console.log(birthday);

// const nextChristmas=new Date(2026,12,25);
// console.log(nextChristmas);

function showRemainingTime(targetDate){
   const timeNow =new Date().getTime();
   const targetDateinMs=new Date(targetDate).getTime();
   
   const remainingTimeinMs =targetDateinMs -timeNow;

   const remainingTime= getRemainingTime(remainingTimeinMs);

   console.log("Reamining Time is : ", remainingTime);
}
function getRemainingTime(remainingTimeinMs){
    if( remainingTimeinMs <0){
       return "Target date has been reached !";
       
    }

    const days=Math.floor(remainingTimeinMs / (1000*60*60*24));

    const remainderDay=remainingTimeinMs % (1000 * 60 *60*24);

    const hours=Math.floor(remainderDay/(1000*60*60));

    const remainderHour = remainderDay %(1000*60*60);

    const minutes=Math.floor(remainderHour / (1000 *60));

    const remainderMin =remainderHour % (1000 *60);
    
    const seconds =Math.floor(remainderMin / (1000));

    return {"Days" : days, "hour" : hours, " =minutes" : minutes, "seconds": seconds};

}

showRemainingTime("2026-03-19");
console.log("Time Remaining in my birthday...");
showRemainingTime("2026-12-04");