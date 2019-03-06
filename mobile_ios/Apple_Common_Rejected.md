## Apple Reject

------------------------------------------------------------

### Minimum function
### Asking for access (location, gallery, camera) not clearly
### Crash on any function
### UI not good
### Metadata rejected
### Not enought IAP in app
### Not submit IAP/ IAP NOT at status "Ready to submit"
### IAP NOT at status "Ready to submit"
### IAP is more than 99,99$ (more than tier 60)
### IAP is NOT correct product type
### App connect to server error
### Server blocked IP => Apple reviewer cannot connect to server
### App contain Ads but you not check when submit


--------------------------

#### Minimum function
* The content of app is very common, it can be get from web, internet
  
#### Asking for access
* Asking for access in Info.plit file is not clear

#### Crash on any function
  
#### UI not good
* UI similar other apps

#### Metadata rejected
* Description not good
* Description too short
* Description contain link to other website
* IAP wrong
* Name is contain price such as free

```
Guideline 3.1.1 - Business - Payments - In-App Purchase


We noticed that your app description references the following URL that links to external mechanisms for purchases or subscriptions to be used in the app:

http://www.yume100.vn/

Next Steps

To resolve this issue, please remove any URL that links to external purchasing mechanisms from your app description.
```

#### Not enought IAP in app
* Trong mục Features > In-App Purchases : Có thể khai báo 10 IAP nhưng trong app lại không có đủ 10 chỗ để mua IAP
* => Phải có đủ IAP trong app như đã khai báo ở "Features > In-App Purchases"

#### Not submit IAP/ IAP NOT at status "Ready to submit"
* not submit IAP when submit app
* IAP NOT at status "Ready to submit" when submit 

#### IAP NOT at status "Ready to submit"
* IAP NOT at status "Ready to submit" when submit 

#### IAP is more than 99,99$ (more than tier 60)
* Have IAP more than 99,99$ (more than tier 60)

### IAP is NOT correct product type

* IAP must be correct such as "Consumable" or "None-Consumable"
* If you sell the item just need to buy once but you select productype is "Consumable" => you will be rejected

#### App connect to server error

* When app is reviewed, May the app keep show diaglog "Connection to server error"

```
Specifically, your app give error message upon loading screen.
```
#### Server blocked IP => Apple reviewer cannot connect to server

* Amazon server block ip => when Apple review they cannot connect to server


#### App contain Ads but you not check when submit

* Check Advertising Identifier

```
fgrep -R advertisingIdentifier ./
```




