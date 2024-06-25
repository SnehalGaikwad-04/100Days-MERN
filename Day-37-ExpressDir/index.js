const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.use((req,res) => {
    console.log('request received');
    let code = "<h1>Fruits</h1> <ul><li>Dragon fuit</li><li>Tomato</li></ul>";
    res.send(code);
});
