const express = require('express');
const server = express();

const mongoose = require('mongoose');
server.use(express.json());


main().catch(error => console.log(error));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/tripforge");
    console.log('database connected');
}

