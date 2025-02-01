const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = ()=>{

    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{console.log("connection established between database and server")})
    .catch((err)=>{console.log(`Database connection failed due to: ${err}`);
                   process.exit(1);
    })

}

module.exports = dbconnect;