const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Contract_Address= new Schema(
{
    Login_ID:{type: String,required:true},
    Account_no:{type:String,required:true},
    Contract_address:{type:String,required:true}
},{collection:'Contract_Address'}
)

const cd=mongoose.model('Contract_Address',Contract_Address)
module.exports=cd