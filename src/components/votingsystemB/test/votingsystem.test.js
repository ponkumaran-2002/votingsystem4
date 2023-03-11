const assert = require('assert');
const truffle=require('truffle-hdwallet-provider');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// const server=ganache.server();
// server.listen(7545,()=>{
//     console.log("listening")
// })
//const web3 = new Web3(ganache.provider());
const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
const compilex = require('../compile');
//console.log(bytecode)
let accounts;
let votingsystem;
beforeEach(async()=>{
    accounts = await web3.eth.getAccounts();
    console.log(accounts)
    console.log(compilex.abi)
    console.log(compilex.evm.bytecode.object)
    votingsystem=await new web3.eth.Contract(compilex.abi)
    .deploy({data:compilex.evm.bytecode.object})
    .send({from:accounts[0],gas:'1500000'})
    // votingsystem.createProposal("ADHD", "Foo", 2, {from: web3.eth.accounts[1], gas:3000000})
    // votingsystem.deploy({data:compilex.evm.bytecode.object}).send({from:accounts[0],gas:'1000000'})

});
describe('votingsystem',()=>{
    it('deploys a contract',()=>{
        console.log(votingsystem);
    });
});