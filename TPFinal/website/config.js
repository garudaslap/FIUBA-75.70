var config = {};

config.abi = [ { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": false, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "addAddressToWhitelist", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "removeAddressFromWhitelist", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "isInWhitelist", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_hash", "type": "string" } ], "name": "setDocumentHash", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getDocumentHash", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
config.address = "0xcc5c083c958db5a3a1551edee753fa3994d3ed2b";
config.from = "0x1ed78Fc78BA8E32C4F6633F13DD37E99CF4D8AE8";

module.exports = config;