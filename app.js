const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
app.use(bodyParser.json());
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/item', ()=> {
    console.log('connection to mongodb establish');
})

require("./Item");
const Item = mongoose.model("Item");

app.get("/", (req, res) => {
    console.log('This is a get request');
});

app.post("/item", (req, res) => {
    const newbook = {
        name: req.body.name,
        price : req.body.price,
        description: req.body.description
    };
    const item = new Item(newbook);
    item.save().then(() => {
        console.log('Item has been created');
    }).catch((err) => {
          if(err) throw err;
    });
    res.status(200).send('item was successfully created');
});
app.get('/items', (req, res) => {
   Item.find()
   .then((items) => res.json(items))
   .catch((err) => {
    if(err) throw err;
   })
})

app.listen(PORT, () => {
    console.log(`The server is now running at port ${PORT}`);
});