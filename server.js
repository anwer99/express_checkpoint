
const express = require('express')

const app = express()

function logger(req, res, next) {
    
    console.table({ method: req.method, path: req.url })
    if (10>9) {
        next()
    } else {
        res.send("Oups, the request is blocked")
    }
}

app.use(logger)


app.get("/", (req, res) => {
    res.send("Welcome to WS-Express")
})



// app.get("/", (req, res)=>{
//     // res.sendFile("/public/index.html")
//     res.sendFile(__dirname + "/public/index.html")
//     res.sendFile(__dirname + "/public/contact.html")
//     res.sendFile(__dirname + "/public/service.html")
// })
//Oups, the request 

app.use(express.static(__dirname + "/public"))


const port = process.env.PORT || 5000
app.listen(port, err => {
    err ? console.log(err) : console.log(`the server is running on port http://localhost:${port}`)
})