const mongoose=require('mongoose')

const Formdetails= new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email should contains @ [a-zA-Z0-9.-]{2,4}$/"]
    },
    number:{
        type:Number,
        required:[true,"Number is Required"],
    },
    date_of_birth:{
        type:Date,
        required:[true,"Date of Birth is required"],
    },
    gender:{
        type:String,
        required:[true,"Gender is Required"]
    },
    city:{
        type:String,
        required:[true,"City is required"]
    },
    state:{
        type:String,
        required:[true,"State is required"]
    },
    zip:{
        type:Number,
        required:[true,"Zip is Required"]
    },
    skills:{
        type:[String],
        required:[true,"Skills is required"]
    },
    job_desc:{
        type:String,
        min:[150,"Minimum 150 words is required"],
        required:[true]
    }



})
const Form=mongoose.model("Form",Formdetails);
module.exports=Form;