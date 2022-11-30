/*/ in file bayad to poshe ee ke shamele poshe contracts ha hast ejra shavad


const path = require("path");
const fs = require("fs");
const solc = require("solc");//chizi ke nasb kardim baraye copiler

const inboxPath = path.resolve(__dirname, "contract", "inbox.sol");    
//__dirname baraye gereftan location path felli hast   
 //filed baadi ba pooshe contract toosh hast poor mishe va field baadish ba esm contract
const source = fs.readFileSync(inboxPath, "utf8");

console.log(solc.compile(source, 1)); // adad dovomi baraye teedad fili hast ke mikhayiim compile konim

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contract', 'inbox.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
var input = {
    language: 'Solidity',
    sources: {
        'inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};
var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);

output = output.contracts['inbox.sol'];

//will search for the folder to ensure it exists
//and if not, will make one

fs.ensureDirSync(buildPath);

for (let contract in output){
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace('.sol','') + '.json'), output[contract]
  );
}

*/


/*/// ejra ba  "node compile.js"

const solc = require("solc");
const path = require("path");
const fs = require("fs");

const contractPath = path.resolve(__dirname, "contract/Lottery.sol");
const source = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "contract/Lottery.sol": {
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

const wowLookAtThat = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports = wowLookAtThat.contracts["contract/Lottery.sol"]["Lottery"];
//console.log(module.exports);*/
const path = require('path');
 const fs = require('fs-extra');
 const solc= require('solc');
 const { url } = require('inspector');

 const buildPath = path.resolve(__dirname, 'build');

 fs.removeSync(buildPath);

 const campaignPath= path.resolve(__dirname,'contract',   'Lottery.sol');
 const source = fs.readFileSync(campaignPath,'utf-8');
 var input = {
    language: 'Solidity',
    sources: {
             'Lottery.sol': {
              content: source
   }
},
    settings: {
              outputSelection: {
              '*': {
                 '*': ['*']
                  }
               }
      }
};
module.exports = JSON.parse(solc.compile(JSON.stringify(input)))['contracts']['Lottery.sol']['Lottery'];
console.log(module.exports);///mudole.exports chizi ast ke barnamat khorji midahad baraye hamin mitoni ba oonyeki barname ino begiry