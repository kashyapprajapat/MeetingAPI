require('dotenv').config();
const express = require('express');
const bodyparser  = require('body-parser');
const app = express();
require("./db/conn");
const cors = require('cors');


app.use(cors());
// console.log(process.env.mongodb_url);
const meeter = require("./models/meeting");
const PORT = process.env.port || 4000;
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.get("/",async(req,res)=>{
     try{
       
       const meeting  = new meeter(req.body);
       const meetingdata = await meeter.find();
       console.log(meetingdata);
       res.send(meetingdata);
   }  
     catch{
        console.error(Error);
        res.status(500).render("Serever Error!")
     }

})

app.post("/create",async(req,res)=>{
   try{
    
       const mt1 = new meeter(req.body);
       console.log(req.body);
       const meetingsave = await mt1.save();
       res.status(201).send("<h1>Your Meeting Details Saved Sucessfully</h1>")
   }
   catch{
         res.status(500).send("<h1>Server Error!.</h1>")
   }
})




app.listen(PORT,()=>{
    console.log(`Server is SuccessFully Running at Port No:${PORT}`);
})


