const mongoose =require('mongoose')
function DBConnect(){
    mongoose.connect("mongodb+srv://ADMIN:fsCNJeQAG3rU5VsG@cluster0.6jqdj4s.mongodb.net/Regdetails?retryWrites=true&w=majority",{
        useNewUrlParser:true
    }).then((conn)=>{
        console.log("Connected To DB");
    }).catch((err)=>{
        console.log("Some Problem In Connection");
        console.log(err);
    })
}
module.exports=DBConnect;  