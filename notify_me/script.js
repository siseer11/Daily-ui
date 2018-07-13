const forWrapper = document.querySelector('.form-wrapper')
const form = forWrapper.querySelector('form');
const emailInput = form.querySelector('input[type="email"]');
const expandButton = forWrapper.querySelector('.notify-me');
const mainWrapper = document.querySelector('.wrapper');
const emailChecker = (email) => /^[a-z0-9_]+@[a-z]+\.[a-z]{2,5}$/.test(email);

expandButton.addEventListener('click',(e)=>{
  forWrapper.classList.add('expanded');
})


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(!emailChecker(emailInput.value)) return
  forWrapper.classList.add('sent');
  window.setTimeout(()=>{
    forWrapper.classList.remove('expanded');
  },200)
})

form.addEventListener('focusin',(e)=>{
  form.classList.add('focused')
})


emailInput.addEventListener('input',(e)=>{
  if(emailChecker(emailInput.value)){
    form.classList.add('correct')
  }else if(form.classList.contains('correct')){
    form.classList.remove('correct')
  } 
})

form.addEventListener('focusout',(e)=>{
  if(!emailInput.value){
    form.classList.remove('focused')
  }
})

mainWrapper.addEventListener('click',(e)=>{
  if(e.target != mainWrapper || !forWrapper.classList.contains('expanded')) return;
  forWrapper.classList.remove('expanded')
})