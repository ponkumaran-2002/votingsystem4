const mongoose = require('mongoose')
const Schema = mongoose.Schema
const VoterID = new Schema(
{
    V_ID:{type: String,required:true,unique:true},
    Name:{type:String,required:true},
    DOB:{type:String,required:false},
    Relative_Name:{type:String,required:false},
    Address:{type:String,required:true},
    PhoneNo:{type:String,required:true}
},{collection:'VoterID'}
)

const Voter=mongoose.model('VoterID',VoterID)
module.exports=Voter