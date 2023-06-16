const task = ()=>{
     const now = Date.now();
     while(Date.now() <= now+2){
     }
} 

const _run= async()=>{
  return new Promise((resolve)=>{
    for(let i=0; i< 1000; i++){
      runTask(task);
    }
    resolve();
  });
}

const run = async()=>{
  const start = Date.now();
  await _run();
  const cost = Date.now()-start;
  document.querySelector("#cost").textContent=cost;
}



const _runBlocking= async()=>{
  return new Promise((resolve)=>{
    for(let i=0; i< 1000; i++){
      runTaskBlcoking(task);
    }
    resolve();
  });
}
const runBlocking = async()=>{
  const start = Date.now();
  await _runBlocking();
  const cost = Date.now()-start;
  document.querySelector("#cost").textContent=cost;
}

// Blocking case 1

// const runTaskBlcoking = (task)=>{
//   task();
// };


// Blocking case 2

const runTaskBlcoking = (task)=>{
  return new Promise((resolve)=>{
    requestAnimationFrame(()=>{
      task();
      resolve();
    });
  });  
};

// Lagging 

// const runTask = (task)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       task();
//       resolve();
//     });
//   });  
// };

const _runTask = (task, callback)=>{
  const start = Date.now();
  requestAnimationFrame(()=>{
    if(Date.now() - start < 16.67){
      task();
      callback();
    } else{
      _runTask(task, callback);
    }
  });

}

const runTask = (task)=>{
  return new Promise((resolve)=>{
    _runTask(task, resolve);  
})};

