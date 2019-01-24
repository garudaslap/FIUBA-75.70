pragma solidity ^0.4.25;

contract WhitelistedPOE {
    
    string documentHash = "";
    mapping(address => bool) whitelist;
    
    constructor() public {
        whitelist[msg.sender] = true;
    }
    
    function addAddressToWhitelist(address _addr) public
    {
        if (whitelist[msg.sender])
            whitelist[_addr] = true;
    }
    
    function removeAddressFromWhitelist(address _addr) public
    {
        if (whitelist[msg.sender])
            whitelist[_addr] = false;
    }
    
    function isInWhitelist(address _addr) public view returns (bool)
    {
        return whitelist[_addr];
    }
    
    function setDocumentHash(string memory _hash) public {
        if (whitelist[msg.sender])
        {
            documentHash = _hash;
        }
    }
    
    function getDocumentHash() public view returns (string memory) {
        return documentHash;
    }
    
}