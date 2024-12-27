const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected successfully"))
.catch((error) => console.log("error", error));

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true}
})

const Item = mongoose.model("Item", itemSchema);

app.get('/api/items', async(req, res) => {
    try{
        const items = Item.find();
        res.status(200).json(items);
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

app.post('/api/items', async(req, res) => {
    try{
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch(error){
        res.status(400).json({error: error.message});
    }
})

app.listen(PORT, () => {
    console.log("http://localhost:"+PORT);
})