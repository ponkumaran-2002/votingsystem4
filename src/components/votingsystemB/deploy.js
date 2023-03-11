// /const HDWalletProvider = require('truffle-hdwallet-provider');
const ganache = require("ganache-cli");
const Web3 = require('web3')
const compilex = require('./compile');
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
//const web3= new Web3(ganache.provider())
console.log(web3)
var address1;
const deploy = async(accountno)=>{

    console.log('Attempting to Deploy from Account',accountno);
    const result =  await new web3.eth.Contract(compilex.abi)
                              .deploy({data:compilex.evm.bytecode.object})
                              .send({from:accountno,gas:'1500000'});
    console.log('Contract Deployed to',result.options.address)
    console.log(accountno)
    const ra=result.options.address;
    address1=result.options.address;
    localStorage.setItem('Contractaddress',address1);
    return ra;

};
module.exports=deploy
// exports.address_d=address1
// // //expor
// exports.fun1=deploy;
// exports.address_d=address1;
// module.exports={
//     deploy,
//     address1
// }
