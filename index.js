const express = require("express");
const PORT = 2023;
const path = require("path")

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})



app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`The server has started at http://localhost:${PORT}`)
    }
})

