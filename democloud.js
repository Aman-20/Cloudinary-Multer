import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
import { anymodel } from './demo.js';

dotenv.config();

cloudinary.config({
    cloud_name: 'dp55vvd7j',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const cloudfile = async(req, res)=>{
    const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "upload1"
    });
    const savetoDB = await anymodel.create({
        filename: req.file.originalname,
        public_id: result.public_id,
        imgurl: result.secure_url
    });

    res.json({message:"file uploaded successfully to cloudinary", result, savetoDB});
    //console.log(result);
}