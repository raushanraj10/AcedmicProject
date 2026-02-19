const express =require("express")
const cors=require("cors")

const app=express();
app.use(express.json());

app.use(cors({
   origin:"http://localhost:5173",
   credentials:true
}))

app.post("/",(req,res)=>{
    console.log(req.body.data)
    res.send("Yes From Backend")
})

app.listen(5000,()=>{console.log("Connected Server")})