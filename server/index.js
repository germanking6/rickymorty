const express = require('express')
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 3001

const newPet = {
    "pet3" : {
        "name" : "bizcochito",
        "type" : "cat",
        "owner" : "Oscar",
        "color" : "black",
        "id": 1
    }
}

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the server side :("})
});

app.get("/api/pet", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        console.log(data);
        res.end(data);
    });        
});

app.post("/api/pet", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse(data)
        data['pet3'] = newPet['pet3']
        console.log(data);
        res.json(data);
    });        
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})