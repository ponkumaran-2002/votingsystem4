const path = require('path');
const fs= require('fs');
const solc = require('solc');
const { eventNames } = require('process');
const votingsystemPath = path.resolve(__dirname,'Contracts','votingsystem.sol')
const source = fs.readFileSync(votingsystemPath,'UTF-8');
var input = {
    language: "Solidity",
    sources: {
      "votingsystem.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
//  console.log(votingsystemPath)
//  console.log(source)
//consol.log(v)
//JSON.stringify
//console.log(solc.compile(input))
//console.log(solc.compile(source))
//var x=JSON.parse(solc.compile(JSON.stringify(input)));
//console.log(x.contracts)
// compilefiles=JSON.parse(solc.compile(JSON.stringify(input))).contracts['votingsystem.sol'].voting_system;
//console.log(compilefiles)
//.evm.bytecode.object
// console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts['votingsystem.sol'].voting_system)
module.exports=JSON.parse(solc.compile(JSON.stringify(input))).contracts['votingsystem.sol'].voting_system;
