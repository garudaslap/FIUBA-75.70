const express = require('express')
const MetaMaskConnector = require('node-metamask');
const Web3 = require('web3')
const bodyParser = require('body-parser');
const app = express()
const path = require('path')

var web3;

app.use(bodyParser.urlencoded({ extended: true }));


/*
const connector = new MetaMaskConnector({
    port: 3333, // this is the default port
    onConnect() { console.log('MetaMask client connected') }, // Function to run when MetaMask is connected (optional)
});
  
connector.start().then(() => {
    // Now go to http://localhost:3333 in your MetaMask enabled web browser.
    web3 = new Web3(connector.getProvider());
    web3.eth.defaultAccount = web3.eth.accounts[0];
    // Use web3 as you would normally do. Sign transactions in the browser.
});

app.set('view engine', 'ejs')

var abi = [ { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": false, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "addAddressToWhitelist", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "removeAddressFromWhitelist", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "isInWhitelist", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_hash", "type": "string" } ], "name": "setDocumentHash", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getDocumentHash", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
var address = "0xCC5C083C958DB5A3a1551EDEE753FA3994D3Ed2B";

app.get('/', function (req, res) {
    var oldHashValue;

    var whitelistedPOEContract = new web3.eth.Contract(abi,address);

    whitelistedPOEContract.methods.getDocumentHash().call().then((result) => {
        console.log(result);
        oldHashValue = result;

        res.render('index', {oldHash: oldHashValue});
    }).catch((error) => {
        console.log(error);
    });;
})
*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'views', 'index.html'));
 });

/*
app.post('/', function (req, res) {
    var newHash = req.body.newHash;

    web3.eth.defaultAccount = web3.eth.accounts[0];
    var whitelistedPOEContract = new web3.eth.Contract(abi,address);

    whitelistedPOEContract.methods.setDocumentHash(newHash).send({from:"0x1ed78Fc78BA8E32C4F6633F13DD37E99CF4D8AE8"}).then((result) => {
        console.log("salida:");
        console.log(result);
        
        res.render('index', {oldHash: newHash});
    }).catch((error) => {
        console.log(error);
    });;

})
*/