let links = document.querySelectorAll('li.link');
let buble = document.querySelector('.buble');

links.forEach(el=>el.addEventListener('click',(e)=>{
  document.querySelector('li.active').classList.remove('active')
  el.classList.add('active');
  buble.style.left = `${el.offsetLeft + 8}px`
}))