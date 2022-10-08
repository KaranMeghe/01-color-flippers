const colors =['red','green','blue','rgba(133,122,400)','#f15025','#fc9c9c','yellow',' #40EB56'];

const button = document.querySelector('.btn');
const color =  document.querySelector('.color');
const container = document.querySelector('.container');

button.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length)
    container.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
})


