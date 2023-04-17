const express = require("express");
const PORT = 2023;

const app = express();

app.use(express.json())



app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`The server has started at http://localhost:${PORT}`)
    }
})

