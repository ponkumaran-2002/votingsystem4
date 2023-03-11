const mongoose = require('mongoose')
const Schema = mongoose.Schema
const VoterID_Account= new Schema(
{
    V_ID:{type: String,required:true,unique:true},
    Account_No:{type:String,required:true,unique:true},
    Name:{type:String},
    DOB:{type:String},
    Address:{type:String,required:true},
    PhoneNo:{type:String,required:true}
},{collection:'VoterID_Account'}
)

const Voter1=mongoose.model('VoterID_Account',VoterID_Account)
module.exports=Voter1   