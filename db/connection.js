const mongoose = require("mongoose");
const db= process.env.DATABASE_URL;

mongoose.connect(db).then(()=>{
    console.log("DataBase connected");
}).catch(err => console.log(err));