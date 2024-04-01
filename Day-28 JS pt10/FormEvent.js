// let form = document.querySelector('myForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // This prevents the default form submission
//     var userInput = document.querySelector('textInput').value;
//     console.log('User input:', userInput);
// });


let btn =  document.querySelector('button');
let ul =  document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item); 

    inp.value = '';
});