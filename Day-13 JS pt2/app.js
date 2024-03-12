let color='yellow';

switch (color){
    case 'red':
        console.log('red');
        break;
    case 'yellow':
        console.log('yellow');
        break;
    case 'green':
        console.log('green');
        break;
    default:
        console.log('some color :)')
}

// practice Qn days of the week

let day=prompt('select a number from 1 to 7');

switch (day){
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('days of the week')
}