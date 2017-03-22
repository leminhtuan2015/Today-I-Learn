### Code Signing and Provisioning
### References
  - https://pewpewthespells.com/blog/migrating_code_signing.html#introduction-to-code-signing
  - https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html


-------------------------------------------

### Code Signing and Provisioning
  - All apps must be **code signed** and **provisioned** to launch on a device, or to be uploaded to iTunes Connect
    - **Signing** (signing identities)
    - **Provisioning** (provisioning profiles)
### Apple concepts about signing app

#### Basic
  - Xcode : IDE for coding app
  - App ID: Account Apple Developer
  - Member Center: https://developer.apple.com/account/#/welcome (where you can create Provisioning Profiles, App IDs Certificates)
  - Keychain Access : Tool manage **Signing Identity***
    - Create ***Certificate Signing Request (CSR)***
    - Store ***Signing Identity***
  
#### Advance
  - Certificate Signing Request (CSR): Create a file ***CertificateSigningRequest.certSigningRequest*** on Macbook by ***Keychain Access*** and submit to Apple
  - Signing Identity : The public-private key pair that Apple creates for you, 
  - Provisioning Profile
  - Private & Public Key

