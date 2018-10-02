
### keystore.keystore vs keystore.jks 
### Convert .keystore <-> .jks 
### Lost Keystore – How to generate and register a new upload key (mac).
------------------------------

### keystore.keystore vs keystore.jks 

* Difference between .keystore file and .jks file?
* **jks** = "Java keystore"
* .keystore and .jks are just file extensions, there are no difference between .keystore files and .jks files, they are all keystore types

### Convert .keystore <-> .jks 

* jks -> keystore:
  * Just duplicate your .jks file and rename the “.jks” extension to “.keystore“.
* keystore -> jks:
  * Just duplicate your .keystore file and rename the “.keystore” extension to “.jks“.

### Lost Keystore – How to generate and register a new upload key (mac).

- http://ghoulkeeper.com/lost-keystore-how-to-generate-and-register-a-new-upload-key-mac/

* Step 1: Create new keystore
* Step 2: Export the certificate for the new key to PEM format

```sh
keytool -exportcert -rfc -alias yourAliasName -file /The/path/to/your/upload_cert.pem -keystore /The/path/to/your/keystore.jks
```

* Step 3: Sign your APK using the new Keystore file.
