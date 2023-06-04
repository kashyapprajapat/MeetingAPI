const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        require:true,
    },
    starttime:{
        type:String,
        require:true
    },
    endtime:{
        type:String,
        require:true   
    }
});

const meeter = new mongoose.model("meetingdetails",meetingSchema);
module.exports = meeter;