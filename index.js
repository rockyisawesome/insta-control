const express = require("express")
const Instagram = require("instagram-web-api")
require("dotenv").config();
// const fs = require("fs")

const photo = "https://image.shutterstock.com/image-vector/download-jpg-icon-file-label-600w-709293529.jpeg"


const app = express();

const port = process.env.PORT || 6779;
console.log("hello")



const instagramLoginFunction = async () => {
    const client = new Instagram({
        username: process.env.INSTAGRAM_USERNAME,
        password: process.env.INSTAGRAM_PASSWORD
    })

    await client.login();
    const profile = await client.getProfile();
    console.log(profile)

    await client.uploadPhoto({ photo: photo, caption: 'nodeJs automatic photo upload', post: 'feed' })

    console.log("ho gayi photo upload")

    
}

instagramLoginFunction();




app.listen(port, () => {
    console.log(`listening to port ${port}......`);
})