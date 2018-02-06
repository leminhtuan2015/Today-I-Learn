### Blockchain


--------------------------------------------------------------------

### Blockchain
* Blockchain is a data structure (the same linked list)

* Bitcoin is just one implementation of the blockchain

#### Blockchain structure
  * Id
  * **Hash** of previous block (use **hash function** to create hash of block)
  * Data (contain transactions)
 
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
