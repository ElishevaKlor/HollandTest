const mongoose=require("mongoose")

const connectToDB=async()=>{
       await mongoose.connect(process.env.DATABASE_URI)
   
}
module.exports=connectToDB