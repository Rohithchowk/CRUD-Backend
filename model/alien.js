const mongoose =require('mongoose');
const alienSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    tech:{
        type:String,
        required:true
    },

    sub:{
        type:String,
        required:true
    }


})

module.exports=mongoose.model('Alien',alienSchema);