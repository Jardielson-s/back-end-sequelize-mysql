const express = require("express");
const routes=require("./Controllers/controllers");
const database=require("./Model/database");
const  cors =require("cors");


const app= express();
app.use(cors());
app.use(express.json());
app.use(routes)


app.listen(8080);