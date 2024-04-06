let h1 = document.querySelector('h1');

function getColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve('color changed');
        }, delay);
    })
}

async function demo() {
    await getColor('red',1000);
    await getColor('orange',1000);
    await getColor('yellow',1000);
    getColor('green',1000);
}