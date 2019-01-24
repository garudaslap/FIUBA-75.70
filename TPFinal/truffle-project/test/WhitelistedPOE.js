var WhitelistedPOE = artifacts.require("./WhitelistedPOE.sol");

contract('WhitelistedPOE', function(accounts) {
  it("Owner should be whitelisted", function() {
    return WhitelistedPOE.deployed().then(function(instance) {
      return instance.isInWhitelist("0x1ed78Fc78BA8E32C4F6633F13DD37E99CF4D8AE8");
    }).then(function(result) {
      assert.equal(result, true, "Owner is not whitelisted");
    });
  });
  it("Other not owner should not be whitelisted", function() {
    return WhitelistedPOE.deployed().then(function(instance) {
      return instance.isInWhitelist("0x1ed78Fc78BA8E32C4F6633F13DD37E99CF4D8AE7");
    }).then(function(result) {
      assert.equal(result, false, "Other not owner is whitelisted");
    });
  });
  it("Add Address to whitelist", function() {
    return WhitelistedPOE.deployed().then(function(instance) {
      instance.addAddressToWhitelist("0x1ed78Fc78BA8E32C4F6633F13DD37E99CF4D8AE6");
      return instance.isInWhitelist("0x1ed78Fc78BA8E32C4F6633F13DD37E99CF4D8AE6");
    }).then(function(result) {
      assert.equal(result, true, "Address is not whitelisted");
    });
  });
  it("Remove Address to whitelist", function() {
    return WhitelistedPOE.deployed().then(function(instance) {
      instance.removeAddressFromWhitelist("0x1ed78Fc78BA8E32C4F6633F13DD37E99CF4D8AE6");
      return instance.isInWhitelist("0x1ed78Fc78BA8E32C4F6633F13DD37E99CF4D8AE6");
    }).then(function(result) {
      assert.equal(result, false, "Address is whitelisted");
    });
  });

  it("Change document Hash", function() {
    return WhitelistedPOE.deployed().then(function(instance) {
      instance.setDocumentHash("12345");
      return instance.getDocumentHash();
    }).then(function(result) {
      assert.equal(result, "12345", "Document Hash is not correct");
    });
  });
  
});