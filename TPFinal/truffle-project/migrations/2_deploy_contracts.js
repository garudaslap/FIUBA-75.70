var WhitelistedPOE = artifacts.require("./WhitelistedPOE.sol");

module.exports = function(deployer) {
  deployer.deploy(WhitelistedPOE);
};
