/* inspired by Dominik Schmidt - https://dribbble.com/shots/1450986-Uformit-Checkout-Button?list=show&tag=button_ui */

const getEl = (el) => document.querySelector(el);

const shopingButton = getEl('.shoping_button');
const cartSvg = getEl('svg.shoping_cart');
const cartHolder = getEl('.shopingcart_wrapper');
const buttonTxt = getEl('p.button_text');
const completedEl = getEl('.completed')
let mouseDown = false;


shopingButton.addEventListener('mousedown',(e)=>{
  mouseDown = true;
  cartSvg.style.transform = 'translateX(-10px)'
  console.log('d')
})

shopingButton.addEventListener('mouseleave',(e)=>{
  if(!mouseDown)return;
  cartSvg.style.transform = 'translateX(0px)';
})

shopingButton.addEventListener('mouseup',(e)=>{
  if(!mouseDown) return;
  buttonTxt.style.transform = 'translateX(100%)';
  window.setTimeout(()=>{
    buttonTxt.style.display='none';
    cartHolder.style.width = '200%';
    cartSvg.style.opacity = '0';
    window.setTimeout(()=>completedEl.classList.add('done'),150)
  },200)
})