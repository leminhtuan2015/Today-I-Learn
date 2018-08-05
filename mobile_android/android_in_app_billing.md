### Android In-app billing/product

--------------------------------------------------------------

### Android In-app billing/product

* https://stackoverflow.com/questions/13117081/the-item-you-requested-is-not-available-for-purchase

* Here is the list of requirements for the Google IAB testing.

* Prerequisites:

  * AndroidManifest must include "com.android.vending.BILLING" permission.
  * APK is built in release mode.
  * APK is signed with the release certificate(s) (keystore).
  * APK is uploaded to alpha/beta distribution channel (previously - as a draft) to the developer console at least once. (takes some time ~2h-24h).
  * IAB products are published and their status set to active.
  * Test account(s) is added in developer console.

* Testing requirements:

  * Test APK has the same versionCode as the one uploaded to developer console.
  * Test APK is signed with the same certificate(s) as the one uploaded to dev.console.
  * Test account (not developer) - is the main account on the device.

* If you're here from 2018

```
If you're here from 2018, you need to download the APK directly from Play Store and install the "derived" APK.
Maybe it is because of Google's Play Store has a feature "App Signing by Google Play".
```
