const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRouter = require('./routes/Auth');
// const signRoute = require("./routes/Auth");
dotenv.config();


app.use('/users', userRouter.router);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

const PORT = process.env.PORT;

app.listen(PORT || 4000, () => {
    console.log(`Server started at ${PORT}`);
  });

app.use(express.json());
// app.use(cors());