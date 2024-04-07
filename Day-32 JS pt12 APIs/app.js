let btn = document.querySelector('button');
let p = document.querySelector('#output');

btn.addEventListener('click', async () =>{
    let output = await getFacts();
    p.innerText = output;
});

let url = 'https://catfact.ninja/fact';

// better way with axio
async function getFacts() {
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
    } catch(e) {
        console.log('error caught :'+e);
        return 'NO FACT FOUND !';
    }
}







// following is old code, the code above is more efficient with axios
// async function getFact() {
//     try{
//         let res = await fetch(url);
//         let validData = await res.json();
//         console.log(validData);

//     }catch(err){
//         console.log(err);
//     }
// }