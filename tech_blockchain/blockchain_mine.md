### Blockchain Mining, Miners
### All Node in System Mine The Block Together

-------------------------------------------------

### Blockchain Mining, Miners

* https://dev.to/damcosset/blockchain-what-is-mining-2eod

* In Blockchain Bitcoin system
  * Mining is **NOT** about creating new bitcoins. 
  * Mining is the mechanism that allows the blockchain to be a decencentralized security. 
  * Mining secures the bitcoin system and enable a system without a central authority
  
* In Blockchain system
  * Mining is finding the nonce
  * Mining is the computational process of caculating a certain **hash**
  * Mining is Making a **hash of the block** with some conditions (difficulty)
  
* Miners validate new transactions and record them on the global ledger ( blockchain )
* Miners receive a reward when they solve the complex mathematical problem. There are two types of rewards: new bitcoins or transaction fees (rewards can be other things, Must NOT be bitcoin)



### All Node in System Mine The Block Together
* Q1: At the same time all node in system mine the block together but just only first one (miner/node) that creates a valid proof of work wins (this node found the nonce, making the valid hash => will receive rewards), What happens with all other nodes working on the same solutions (NOT win)?

* A1: This is one of the problem with this Proof of Work mechanism. It has to consume a lot of electricity to solve the problem. If you don't win a block's race (Do not find the nonce/ Do not make the valid hash of block), the energy used during those 10 minutes you tried to solve the problem is wasted. This is one of the reasons why the blockchain mechanism doesn't scale so well.

