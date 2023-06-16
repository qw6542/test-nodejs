function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




const run = async(startTime)=>{
  const now = Date.now();
  console.log(now);
  const t = now - startTime;
    if(t < 10 * 1000){
     await sleep(1000);
     run(startTime);
    };
}



run(Date.now());