const buttons = document.querySelectorAll('.switcher');

const wrapper = document.querySelector('.button-wrapper')

buttons.forEach(el=>{
  el.addEventListener('click',(e)=>{
    let data = el.dataset.for;
    if(data=='video'){
      wrapper.classList.remove('photo');
      wrapper.classList.add('video');
    }else{
      wrapper.classList.remove('video');
      wrapper.classList.add('photo');
    }
  })
})

window.addEventListener('click',(e)=>console.log(e))