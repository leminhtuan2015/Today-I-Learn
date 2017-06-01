### Install sqlcipher on Mac OS
### Using sqlcipher Encrypt a Plaintext Database
### Open encrypted database

-------------------------------------------------

### Install **sqlcipher** on Mac OS
  - https://www.zetetic.net/sqlcipher/sqlcipher-binaries-ios-and-osx/
  - http://macappstore.org/sqlcipher/
  
```
brew install sqlcipher
```

### Using **sqlcipher** Encrypt a Plaintext Database
  - https://www.zetetic.net/sqlcipher/sqlcipher-api/#sqlcipher_export
  
Step 1: You already have a none-encrypt database (name plaintext.db)
  
Step 2: Use **sqlcipher** to make encrypted.db with key from plaintext.db
```
$ ./sqlcipher plaintext.db
sqlite> ATTACH DATABASE 'encrypted.db' AS encrypted KEY 'testkey';
sqlite> SELECT sqlcipher_export('encrypted');
sqlite> DETACH DATABASE encrypted;
```

### Open encrypted database
  - http://sqlitebrowser.org/
  
  - We can open encrypted database with the key
