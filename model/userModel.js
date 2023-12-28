const mongoose=require("mongoose")

   const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    image:{
           type:String,
           required:true
    },
    password:{
        type:String,
        required:true
    },

    is_admin:{
        type:Number,
        required:true

    },
    is_varified:{
        type:Number,
        default:0
    },
    token:{
        type:String,
        default:''
    }

})

module.exports=mongoose.model('User',userSchema)