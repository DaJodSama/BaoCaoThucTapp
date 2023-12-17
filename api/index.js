const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRouter = require("./routers/user")
const authRouter = require("./routers/auth")

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Successfull!"))
        .catch((err)=>{
        console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
})