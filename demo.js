import mongoose from 'mongoose';
import express from 'express';
import { upload } from './demomulter.js';
import { cloudfile } from './democloud.js';

import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECT, {
    dbName:"Cloud"
}).then(console.log("MongoDB is connected...."));

const app = express();

const anyschema = new mongoose.Schema({
    filename: String,
    public_id: String,
    imgurl: String
});

export const anymodel = mongoose.model("cloudinary2", anyschema);

app.get('/', (req, res)=>{
    res.render('demopage.ejs');
})

app.post('/upload', upload.single('file'), cloudfile);

app.listen(3000, ()=>{
    console.log("express is connected.....")
})