### Blockchain Consensus
### Methods Of Finding Consensus In A Blockchain

--------------------------------------------------------

### Blockchain Consensus

* Blockchain Consensus is the algorithm to make blockchain security 

* Blockchain uses **distributed consensus** where multiple computers or nodes (Miner) approve these transactions based on mathematical calculations. All these nodes have to arrive at a consensus to approve or reject the transaction.

* **consensus** is a rule for all node (miner) to competitive find out the hash of block with the dificulty (finding nonce)


### Methods Of Finding Consensus In A Blockchain
* Proof-of-work algorithm(PoW)
* Proof-of-stake algorithm (PoS)

#### Consensus achieved using Proof-of-Work (Mining).
* Which nodes is strongger (CPU good, card graphic good) => that miner will be resolve more block => get more reward.
* New transactions are broadcast to all nodes.
* Each node collects new transactions into a block.
* Each node works on finding a difficult proof-of-work for its block.
* When a node finds a proof-of-work, it broadcasts the block to all nodes.
* Nodes accept the block only if all transactions in it are valid and not already spent.
* Nodes express their acceptance of the block by working on creating the next block in the chain, using the hash of the accepted block as the previous hash.
* Nodes always consider the longest chain to be the correct one and will keep working on extending it. 

#### Consensus achieved using Proof of Stake (without Mining)
* Randomly select node to resolve new block.
