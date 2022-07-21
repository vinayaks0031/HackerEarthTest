const mongoose=require("mongoose");
const imageSchema = new mongoose.Schema({
    ImgName:{
        type:String,
        required:true
    },
    ImgUrl:{
        type:String,
        required:true
    },
    ImgDetails:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('images', imageSchema);