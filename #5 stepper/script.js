const round = document.querySelector('.round');
const box = document.querySelector('.box');
const valueHolder = document.querySelector('.value');
const minus = document.getElementById('minus');
let mousePressed = false;
let value = 0;
let min = -10;
const max = 110;

function debounce(func,wait=10,immediate=false){
    let timeout;
    return function(){
        let context =this , args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args)
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow) func.apply(context,args);
    }
}

const valueChecker = () =>{
   value==0?minus.classList.add('inactive'):minus.classList.remove('inactive');
   valueHolder.innerText = value;
   min = (value==0?30 : -10)
}

valueChecker()

const mouseMove = (eClientX) => {
  if(!mousePressed) return;
  let next = eClientX - box.offsetLeft - 30;
  if(next > max){
    next = max
  }else if(next < min){
    next = min
  }
  round.style.left = next + 'px'
}

const debounced = debounce((e)=>mouseMove(e.clientX));
const touchDebaunced = debounce((e)=>mouseMove(e.changedTouches[0].clientX))


round.addEventListener('touchstart',(e)=>{
  mousePressed = true;
  round.classList.remove('bouncy')
  box.addEventListener('touchmove',touchDebaunced)
})

round.addEventListener('mousedown',(e)=>{
  mousePressed = true;
  round.classList.remove('bouncy')
  box.addEventListener('mousemove',debounced)
})


const mouseUp = (e)=>{
  if(!mousePressed) return;
  round.classList.add('bouncy')
  mousePressed = false;
  
  const ballPos = Number(round.style.left.replace('px',''));
  
  if(ballPos > 90){
    value++
    valueChecker()
  }else if (ballPos < 30 && value >= 1){ //some bug where it still goes off, sometimes , so i put value >= 1 to fix it
    value--
    valueChecker()
  }
  
  box.removeEventListener('mousemove',debounced)
  box.removeEventListener('touchstart',touchDebaunced)
  round.style.left = `50px`;
  
}

window.addEventListener('mouseup',mouseUp)
window.addEventListener('touchend',mouseUp)