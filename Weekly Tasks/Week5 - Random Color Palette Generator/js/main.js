const button = document.querySelector('button');
const h2El = document.querySelector('h2');
const bgEl = document.querySelector('section');

button.addEventListener('click',() => {
    let color ='#';
    color += Math.random().toString(16).slice(2,8);
    bgEl.style.backgroundColor = color;
    h2El.innerText = color;
    console.log(color)
})
