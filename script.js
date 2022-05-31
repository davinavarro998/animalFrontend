//Web3
var web3 = new Web3(ethereum);
//Contract's ABIs and addresses
var animalAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "readId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "player",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "awardAnimal",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var animalAddress = "0x7F57139f872BB4D3A17D6D676d7DFBFBF57E0D6C";
var auctionAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_bidder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Bid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_stopTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_currentWinner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "highestBid",
          "type": "uint256"
        }
      ],
      "name": "NewAuction",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "animal",
      "outputs": [
        {
          "internalType": "contract Animal",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "currentWinner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "endTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "highestBidder",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "minimumBid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "winners",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "currentMoment",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "timeLeft",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "isThereTime",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "amountOfWinners",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "bid",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "newAuction",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var auctionAddress = "0x160DE6Bc2c8bBaAcE6A4058e269b212b0DcAa2E7";
//DOM variables
var token_id;
var token_image = document.getElementById('token_image');
var pinata_uri = `https://gateway.pinata.cloud/ipfs/QmUC3h2Z49G7HasNBhGAU7X25oo23UqGRPVynM3UGqhwTE/`;
var bid_button = document.getElementById('bid_button');
var bid_input = document.getElementById('bid_input');
var new_auction_button = document.getElementById('new_auction_button');
var countdown_clock = document.getElementById('countdown_clock');

document.getElementById('animal_address').innerHTML = animalAddress;
document.getElementById('auction_address').innerHTML = auctionAddress;

const readId = async ()=>{
    try{
        let animalContract = new web3.eth.Contract(animalAbi, animalAddress);
        let sendCall = await animalContract.methods.readId().call();
        return sendCall;
    }catch{
        alert('verify your wallet and network');
    }
}

readId().then((animalId)=>{
    token_id = Number(animalId);
    token_image.setAttribute('src', pinata_uri + `${token_id + 1}.jpg`);
    document.getElementById('token_id').innerHTML = token_id + 1;
});


const highestBidder = async ()=>{
    try{
        let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
        let sendCall = await auctionContract.methods.highestBidder().call();
        return sendCall;
    }catch{
        alert('verify your wallet and network');
    }
}

/*
highestBidder().then((highest_bidder)=>{
    document.getElementById('highest_bidder').innerHTML = highest_bidder;
});
*/

const someFunction = async () => {
    const myHighestBidder = await highestBidder();
    document.getElementById('highest_bidder').innerHTML = myHighestBidder;
}

someFunction();




const highestBid = async ()=>{
    try{
        let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
        let sendCall = await auctionContract.methods.minimumBid().call();
        return sendCall;
    }catch{
        alert('verify your wallet and network');
    }
}

highestBid().then((highest_bid)=>{
    let bigNumber = Number(highest_bid) / (10 ** 18);
    document.getElementById('highest_bid').innerHTML = bigNumber;
});


const bid = async (_amount)=>{
    try{
        let accounts = await web3.eth.getAccounts();
        let account = accounts[0];
        let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
        let sendCall = await auctionContract.methods.bid().send({from:account, value:_amount});
        return sendCall;
    }catch{
        alert('verify your wallet and network');
    }
}



bid_button.addEventListener('click', ()=>{
    let bigNumber = Number(bid_input.value) * (10 ** 18);
    bid(bigNumber).then((bid)=>{
        console.log(bid)
    });
});


const newAuction = async (_amount)=>{
    try{
        let accounts = await web3.eth.getAccounts();
        let account = accounts[0];
        let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
        let sendCall = await auctionContract.methods.newAuction().send({from:account, value:_amount});
        return sendCall;
    }catch{
        alert('verify your wallet and network');
    }
}



new_auction_button.addEventListener('click', ()=>{
    newAuction().then((res)=>{
        console.log(res);
    });
});




const timeLeft = async ()=>{
    try{
        let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
        let sendCall = await auctionContract.methods.timeLeft().call();
        return sendCall;
    }catch{
        alert('verify your wallet and network');
    }
}

timeLeft().then((time_left)=>{
    var seconds = time_left;
    const countdown = () =>{
        if (seconds > 0) {
            countdown_clock.innerHTML = `${seconds} seconds left`;
            seconds--;
        } else{
            countdown_clock.innerHTML = 'Time is over';
        }
    }
    let interval = setInterval(countdown, 1000);
});



const isThereTime = async ()=>{
    try{
        let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
        let sendCall = await auctionContract.methods.isThereTime().call();
        return sendCall;
    }catch{
        alert('verify your wallet and network');
    }
}

isThereTime().then((is_there_time)=>{
    if(is_there_time){
        new_auction_button.style.display = 'none';
        bid_button.style.display = 'inline';
        bid_input.style.display = 'inline';
    } else {
        new_auction_button.style.display = 'block';
        bid_button.style.display = 'none';
        bid_input.style.display = 'none';
    }
});











