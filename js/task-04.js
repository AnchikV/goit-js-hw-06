let counterValue = 0;

const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
const span = document.getElementById("value");


incr.addEventListener('click', () => {
    counterValue += 1; 
    span.textContent = counterValue;
});

decr.addEventListener('click', () => {
    counterValue -= 1; 
    span.textContent = counterValue;
});





