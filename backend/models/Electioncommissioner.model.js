const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Electioncommission_Account= new Schema(
{
    Login_ID:{type: String,required:true,unique:true},
    Password:{type:String,required:true,unique:true},
    Account_no:{type:String,required:true},
    DOB:{type:String},
    Address:{type:String,required:true},
    PhoneNo:{type:String,required:true}
},{collection:'Electioncommission_Account'}
)

const ec=mongoose.model('Electioncommission_Account',Electioncommission_Account)
module.exports=ec   