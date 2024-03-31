let imp = document.querySelector('input');

imp.addEventListener('keydown', function() {
    console.log('key was pressed');
});

imp.addEventListener('keyup', function() {
    console.log('key was released');
});

imp.addEventListener('keypress', function() {
    console.log('key was pressed and released');
});

//to detect keys pressed on the respective keycode

imp.addEventListener('keydown', function(event) {
    switch(event.keyCode) {
        case 37:
            console.log('Left arrow key pressed');
            break;
        case 38:
            console.log('Up arrow key pressed');
            break;
        case 39:
            console.log('Right arrow key pressed');
            break;
        case 40:
            console.log('Down arrow key pressed');
            break;
        default:
            console.log('Other key pressed');
            break;
    }
});
