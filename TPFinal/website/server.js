const express = require('express')
const MetaMaskConnector = require('node-metamask');
const Web3 = require('web3')
const bodyParser = require('body-parser');
const app = express()

var config = require('./config');

var web3;

app.use(bodyParser.urlencoded({ extended: true }));

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

var oldHashCache = '';

app.get('/', function (req, res) {
    var oldHashValue;

    var whitelistedPOEContract = new web3.eth.Contract(config.abi,config.address);

    whitelistedPOEContract.methods.getDocumentHash().call().then((result) => {
        console.log("Obteniendo el hash...");
        console.log(result);
        oldHashValue = result;
        oldHashCache = oldHashValue;

        res.render('index', {oldHash: oldHashValue, alertStyle: "primary",alertText: "Ingrese el nuevo Hash a guardar"});
    }).catch((error) => {
        console.log(error);
    });;
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.post('/', function (req, res) {
    var newHash = req.body.newHash;

    web3.eth.defaultAccount = web3.eth.accounts[0];
    var whitelistedPOEContract = new web3.eth.Contract(config.abi,config.address);

    whitelistedPOEContract.methods.setDocumentHash(newHash).send({from:config.from}).then((result) => {
        console.log("salida:");
        console.log(result);
        
        res.render('index', {oldHash: newHash, alertStyle: "success",alertText: "El hash se cambió correctamente."});
    }).catch((error) => {
        console.log(error);
        res.render('index', {oldHash:oldHashCache, alertStyle: "danger",alertText: "La cuenta actual no tiene permisos para cambiar el Hash."});
    });;

})