### Blockchain


--------------------------------------------------------------------

### Blockchain
* Blockchain is a data structure (the same linked list)

* Bitcoin is just one implementation of the blockchain

#### Blockchain structure

variable   | bytes |  description
           |       |
version    |  4    |  version of the bitcoin protocol used to create the block
prevHash   |  32   |  hash of the previous block (use **hash function** to create hash of block)
merkleRoot |  32   |  root of a sha256 hash tree where the leaves are **transactions**
time       |  4    |  time of block creation in seconds since 1970-01-01T00:00 UTC
bits       |  4    |  difficulty of block hash in compressed form
nonce      |  4    |  field used in mining
  
  * https://github.com/leminhtuan2015/Today-I-Learn/blob/master/images/blockchain_structure.png
  * https://github.com/leminhtuan2015/Today-I-Learn/blob/master/images/blockchain_structure_2.png
 
#### Example

  * Block 1: 
  ```
  1:0000000000:[{key:value}]
  ```

  * Block 2: 
    * SHA of block 1 is : 6aa7d3cd33599e3024973ad9c53de3db1d4b013f

  ```
  2:6aa7d3cd33599e3024973ad9c53de3db1d4b013f:[{key:value}]
  ```
  
  * Block 3: 
    * SHA of block 2 is : 42f47f0617a1c98c590a92782d930cb46abc98ce

  ```
  3:42f47f0617a1c98c590a92782d930cb46abc98ce:[{key:value}]
  ```

### Distributed Blockchain
