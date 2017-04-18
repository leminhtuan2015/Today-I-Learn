### Apple payment
### In App Purchase
### References
  - https://www.raywenderlich.com/122144/in-app-purchase-tutorial
  - https://code.tutsplus.com/tutorials/in-app-purchase-tutorial-with-swift-3-ios-sdk--cms-27595

-------------------------------------
### Apple payment
##### What is it?
  - making money from apps

##### How Apple get money from users
  - User will link a bank account to the Apple ID, so when user pay, Apple will take money from user s' bank account
  
##### How developer get money
  - Developer have to link a bank account to the Apple Dev ID
  - After take money from user, Apple will push that money to "Somewhere on Apple server", and you will have to move that money from Apple to your bank account

### In App Purchase
  - ***Consumable IAP***: Buy multiple times (buy coins, buy gems, buy gold, ...)
  - ***Non-Consumable IAP***: Buy one time (remove ads, buy content, ...)
  - ***Restore Purchase***: users will be able to purchase it ***only once***, and Apple requires the ability to restore purchases. That happens in case 
    - Users uninstall the app and reinstall it again
    - Or download it from another device with your same Apple ID and need to get your purchases back without paying for them twice
  - ***Reference Name***: this name will be used on iTunes Connect and in Sales and Trends reports. It won't be displayed on the App Store and you can type any name you want, but it can't be longer than 64 characters.
  - ***Product ID***: A unique alphanumeric identifier that will be fetched by the app in order to recognize your product. Usually developers use a web-reverse syntax for product ids. In this example we chose com.iaptutorial.coins. Later on we'll paste this ID as a string into our code
  - ***Price***: Choose a price tier from the dropdown menu. Remember that in order to sell your in-app purchase product on the App Store, you must have applied for a Paid Application Agreement in the Agreements, Tax & Banking section
  - ***Localizations***: For the sake of this tutorial we've chosen only English, but you can add more languages by clicking on the (+) button. Then type a Display Name and a Description. Both of them will be visible on the App Store.
  - ***Screenshot***: Upload a screenshot for review. It will not be displayed in the App Store and it must have a valid size for your app platform, so if your app is Universal, you may upload an iPad screenshot.
  - ***Review Notes***: Any additional information about your IAP which may be helpful for the reviewer.
