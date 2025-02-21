pragma solidity ^0.8.24;

contract WebpageStorage {
    struct Webpage {
        string cid;
        address owner;
        uint256 timestamp;
    }

    mapping (string => Webpage) public webpages;
    mapping (address => string[]) public userWebpages;

    event WebpageStored(string domain, string cid, address owner, uint256 timestamp);

    // Function to store the Web pages :
    function storeWebpage(string memory domain, string memory cid)  public {
        require(bytes(domain).length > 0, "Domain cannot be empty");
        require(bytes(cid).length > 0, "CID cannot be empty");

        webpages[domain] = Webpage(cid, msg.sender, block.timestamp);
        userWebpages[msg.sender].push(domain);

        emit WebpageStored(domain, cid, msg.sender, block.timestamp);
    }

    // Function to get all the Web pages : 
    function getWebpage(string memory domain) public view returns (string memory, address, uint256) {
        Webpage memory webpage = webpages[domain];
        require(bytes(webpage.cid).length > 0, "Webpage not found");
        return (webpage.cid, webpage.owner, webpage.timestamp);
    }

    // Function to get a single Web pages :
    function getUserWebpages(address user) public view returns (string[] memory) {
        return userWebpages[user];
    }
}