### IAP
### IAP Testing
### Restore Purchases
### Cancel Subscription
### Request Refund
### ReactNative IAP
### IOS Subscription groups (Upgrade Subscription)
### IAP Q&A
---------------------------------------------------

### IAP

* **One-time pruchase products**
  * `Consumable product` : (pruchase one-time use one)
    * Buy coin
  * `None-Consumable product` : (pruchase one-time - use forever)
    * Remove ads
  
* **Subscription pruchase products**
  * `Subscription Auto-Renewable` : renew automatically : (use util subscription is canceled)
  * `Subscription Non-Renewing` : does not renew automatically
  
### IAP Testing

* **IOS IAP Sanbox environment**
  * Apple provide the **Sanbox** environment for testing IAP
  * **In App Purchase Prompted twice for login using Sandbox Account**
    * Two sign-in dialogs on in-app purchase on Sandbox environment
    * If You are using sandbox testing app store account credentials for In-app purchase, then it will prompt to enter username and password twice for sure but it will work well on Live
    * https://stackoverflow.com/questions/32123903/ios-in-app-purchase-prompted-twice-for-login-using-sandbox-account
    * https://developer.apple.com/forums/thread/14088

  
### Restore Purchases
* If your app sells **non-consumable**, **auto-renewable subscription**, or **non-renewing subscription** products, then you must provide a UI that allows them to be restored

* In-app purchases that **are none-consumable or auto-renewable subscription or non-renewing subscription products can be restored**
* If you reinstall an app, reset your Android device, or get a new Android device, you can regain access to already purchased in-app purchases.

* **Restore Purchases on Android Google is works differently on IOS Apple**

* Restore Purchases
  * **Android**: Most Android apps should automatically query Google Play and check for any in-app purchases you’ve made, automatically restoring them for you.
  * **IOS** : you have to manually restore in-app purchases by tapping a "Restore Purchases" button that App developer code in app

### Cancel Subscription

* For both iOS and Android your users cannot cancel subscriptions inside your app. You need to direct your users to iTunes/the App Store or Google Play.

```js
//IOS
//IOS 12 or later
Linking.openURL('https://apps.apple.com/account/subscriptions')

//IOS before 12
Linking.openURL('https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/manageSubscriptions')

//Android
Linking.openURL('https://play.google.com/store/account/subscriptions?package=YOUR_PACKAGE_NAME&sku=YOUR_PRODUCT_ID
```

### Request Refund

* If a purchase was accidentally made by a friend or family member using your account
* If you or a family member bought an item by accident
* You can make a request to Google or Applr to refund your purchases

* Android: https://support.google.com/googleplay/answer/2479637?hl=en
* IOS: https://support.apple.com/en-us/HT204084


### ReactNative IAP

* Subscription
  * **getAvailablePurchases** method returns all the purchases made (already purchased)
  
  * Android:
    * When an active subscription expires, it does not show up in available purchases anymore
  * IOS: 
    * still show up in available purchases even the subscriptions that are expired.
    * Solution for checking: https://github.com/dooboolab/react-native-iap/issues/275#issuecomment-433582389


### IOS Subscription groups (Upgrade Subscription)

* How to upgrade subscription from monthly to yearly

* **IOS subscription group** is a collection of subscription products that has some specific properties.
  * No two products in a subscription group can be active at the same time.
  * A subscription group also determines the service level of each product, determining the upgrade/downgrade/crossgrade behavior.
  * Users could now upgrade or downgrade their subscriptions without having to cancel first, wait for the expiration, and re-purchase.



### IAP Q&A


#### IOS

* IS IAP Cannot connect to iTunes Store
    * https://developer.apple.com/forums/thread/98763


