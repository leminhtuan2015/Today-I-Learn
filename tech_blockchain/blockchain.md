### Blockchain

--------------------------------------------------------------------

### Blockchain

* Blockchain is a **distributed database** that maintains a continuously growing list of ordered records.
* Blockchain is the same **linked list** data structure, Each block contain a **hash** of previous block
* Each block contain the number of transactions infomation (it's data)
* Each block contain the **hash** of previous block, And it's Data (transactions)
* Blocks hold batches of valid transactions that are hashed and encoded into a Merkle tree

* Bitcoin Blockchain
  * Bitcoin is just one implementation of the blockchain
  * Bitcoin Blockchain use **SHA-256** to hash it's data.

#### Blockchain purposes

* Open distributed ledger (ledger store transactions)
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
