const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000 ;

app.use(express.json());

const xyzroute = require("./routers/route")

app.use("/api/v1" , xyzroute)

app.listen(PORT , ()=>{
    console.log(`server started at port ${PORT}` )
})

const dbconnect = require("./config/databaseconnection");
dbconnect();

app.get("/" , ()=>{
    res.send("<h1>this is homepage baby</h1>");

})