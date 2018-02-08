### Blockchain
### Blockchain and Business Model
### Why The Data In Block CAN NOT (very difficul) Be Altered (changed)
--------------------------------------------------------------------

### Blockchain

* Big thinks in IT
  * Server
  * Computer
  * Network
  * Social Network
  * Blockchain

* Blockchain is a : 
  * **distributed database** that maintains a continuously growing list of ordered records.
  * **decentralized network** operate by many node (Miner) in the blockchain network.
  * **peer to peer**, without a middle-man (Third Party) to manage the exchange.
  
* Blockchain is the same **linked list** data structure, Each block contain a **hash** of previous block

#### Block
* Block is the set of transactions 
* Each block contain the number of transactions infomation (it's data)
* Each block contain the **hash** of previous block, And it's Data (transactions)
* Blocks hold batches of valid transactions that are hashed and encoded into a Merkle tree

* Bitcoin Blockchain
  * Bitcoin is just one implementation of the blockchain
  * Bitcoin Blockchain use **SHA-256** to hash it's data.

#### Blockchain purposes
* Blockchain = distributed transaction database
* Blockchain = Open distributed ledger (ledger store transactions)
* Peer - to - Peer (data **IS NOT** store at only thirst party it is stored on every node)
* Records **transactions** between two parties and verifies it
* Once a data (transaction) is verified in Blockchain, the data **CAN NOT (very difficul)** be altered (changed)

#### Blockchain structure

  * Block headers
    * Version
    * Prev block
    * Merkle root
    * Timestamp
    * Bits
    * Nonce
  
  * https://github.com/leminhtuan2015/Today-I-Learn/blob/master/images/blockchain_structure.png
  * https://github.com/leminhtuan2015/Today-I-Learn/blob/master/images/blockchain_structure_2.png
  * http://srv1.yogh.io/#block:last
 
#### Example

  * **Block 1:** 
  ```
  1:0000000000:[{key:value}]
  ```

  * **Block 2:** SHA of block 1 is : 6aa7d3cd33599e3024973ad9c53de3db1d4b013f
  ```
  2:6aa7d3cd33599e3024973ad9c53de3db1d4b013f:[{key:value}]
  ```
  
  * **Block 3:** SHA of block 2 is : 42f47f0617a1c98c590a92782d930cb46abc98ce
  ```
  3:42f47f0617a1c98c590a92782d930cb46abc98ce:[{key:value}]
  ```
  
  ### Blockchain and Business Model
  
  * Blockchain is the platform and we should find a Business Model (Application) to use Blockchain for support hand handle our Application problem
  
  * Example: Blockchain is the same **Internet**, IOS/Android application is run on Internet, we should not be better Internet such as better TCP/IP ... But we need to find out a Business Model (Application) to run on Internet.
  
  
  ### Why The Data In Block CAN NOT (very difficul) Be Altered (changed)
  
  * Because each block contain the **hash of previous block**, If one block changed => all block after that block will be change as well.
  * Example Blockchain : **A1 <- A2 <- A3 <- A4 <- A5 <- An**
    * If block **A3** change => **A4** to **An** will be change too. => If you change **A3** you also have to again resolve from **block A4 to An** (exmple each block resolved in 10 minus) => Need (10 * n) minus to change a blockchain in one node
    * After change the blockchain in one node (take 10 * n minus) you have to update it in all network
    * And that is impossiable
 
  
  
  
  
  
  
  
  
  
  
  
