/**
 * 
 * @param {*} from 
 * @param {*} to 
 * @param {*} duration 
 * @param {function} onProgress 
 */

const animation = (from, to, duration, onProgress)=>{

  const distance = to - from;
  const speed = distance / duration;
  const startTime = Date.now();
  const stopTime = startTime + duration;

  function _run(){
  const now = Date.now();
  if(now >= stopTime){
    return;
  }   
  const d = (now - startTime)*speed; 
  value = from + d;
  onProgress(value);
  requestAnimationFrame(_run);
}
requestAnimationFrame(_run);
}

exports = { animation };
