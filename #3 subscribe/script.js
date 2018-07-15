let popButton = document.querySelector('.pop-form');
let wrapper = document.querySelector('.wrapper');
let emailInput = document.querySelector('input[type="email"]')
let form = document.querySelector('form');
let plane = document.getElementById('plane');

popButton.addEventListener('click',()=>{
  wrapper.classList.add('open');
  emailInput.focus()
})

form.addEventListener('submit' , (e) => {
  e.preventDefault()
  plane.classList.remove('correctFilled')
  wrapper.classList.add('sent');
  emailInput.style.display = 'none'
})

const emailCheck = (email) => /^[a-zA-Z0-9_]+@[a-z]+\.[a-z]{2,}$/.test(email)



/*
Inspired by : https://www.pinterest.se/pin/525021269050084341/
*/