### Blockchain Mining, Miners
### All Node in System Mine The Block Together

-------------------------------------------------

### Blockchain Mining, Miners

#### Mining
* https://dev.to/damcosset/blockchain-what-is-mining-2eod

* In Blockchain system
  * Mining is the computational process of finding a nonce and caculating a certain **hash of block**
  * Mining is making a **hash of the block** with some conditions (difficulty)
  * Mining is finding the nonce, Mining is absolutely a lottery

* In Blockchain Bitcoin system
  * Mining is **NOT** about creating new bitcoins. 
  * Mining is the mechanism that allows the blockchain to be a decencentralized security. 
  * Mining secures the bitcoin system and enable a system without a central authority
  
#### Miners
* Blockchain **CAN NOT** work without Miner (Computer node).
* Miners is the node (Computer) of blockchain network, miner use there computer (CPU, Chip, RAM, graphics card) to find the nonce (with difficulty) => find the certain **hash** of block => receive rewards (BTC, ETH, ...)
* Miners validate new transactions and record them on the global ledger ( blockchain )
* Miners receive a reward when they solve the complex mathematical problem. There are two types of rewards: new bitcoins or transaction fees (rewards can be other things, Must NOT be bitcoin)
* All the network miners **compete** to be the first to find nonce
* A reward is given to the **first miner** who solves each blocks problem

* This threshold, called difficulty, is what determines the competitive nature of mining: **more computing power is added to the network, the higher this difficulty parameter increases**, increasing also the average number of calculations needed to create a new block.

* The first Miners find the nonce (found the hash of block) will be able to add block to blockchain => and get rewards (BTC, ETH, ...)

### All Node in System Mine The Block Together
* Q1: At the same time all node in system mine the block together but just only first one (miner/node) that creates a valid proof of work wins (this node found the nonce, making the valid hash => will receive rewards),What happens with all other nodes working on the same solutions (NOT win)?
  
  * A1: This is one of the problem with this Proof of Work mechanism. It has to consume a lot of electricity to solve the problem. If you don't win a block's race (Do not find the nonce/ Do not make the valid hash of block), the energy used during those 10 minutes you tried to solve the problem is wasted. This is one of the reasons why the blockchain mechanism doesn't scale so well.


* Q2: Data of block is **[previous block hash, merkle tree root, target, timestamp, and version]**, Does Miners (Node) are generating hashes (finding nonce) in parallel as they increment their nonce from 0, 1, 2, 3, ... ,n ?, Miners mine one block together => Does Miner using the same informations of block?
  
  * A1: For Mining : Once a block is **mined**, everyone has access to the same informations and can make sure that the data is valid, BUT When mining the block miners NOT using the same informations. First, the merkle root will be different for everyone. The first transaction in the block ( coinbase transaction) sends bitcoins to the miner personal wallet. Each wallet address will be different, therefore the merkle root will be different too. It is also very unlikely that they will use the same timestamp for the block. If you found **nonce is 123456789** but other miners may not have a valid hash with this nonce because their timestamp and/or their merkle root was different
