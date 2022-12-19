const mongoose=require('mongoose');
const mongouri="mongodb+srv://rishi:rishi@cluster0.ntglxtp.mongodb.net/?retryWrites=true&w=majority";
const connecttoMongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log("connected to mongo");
    })
}
module.exports=connecttoMongo;