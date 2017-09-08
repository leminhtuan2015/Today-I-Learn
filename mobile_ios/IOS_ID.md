### HOW TO DETECT UNIQUE IOS DEVICE

----------------------------
### HOW TO DETECT UNIQUE IOS DEVICE

* Step 1 Setting -> Safary -> Block cookei + Block tracking
* Step 2 Remove all apps relate with G (Youtube, Map, G+)

#### From IOS 5 the is no way

* **IDFA** (Identifier for Advertising/Advertising Identifier): The Advertising Identifier (IDFA) is a unique ID for each iOS device and is the only way to offer targeted ads.

* **UUID** (Universally Unique IDentifier) Is on a per-app basis. identifies an app on a device. As long as the user doesn’t completely delete the app, then this identifier will persist between app launches, and at least let you identify the same user using a particular app on a device. Unfortunately, if the user completely deletes and then reinstalls the app then the ID will change.

* **UDID** (Unique Device Identifier) A sequence of 40 hexadecimal characters that uniquely identify an ios device. This value can be retrieved through iTunes, or found using UIDevice -uniqueIdentifier. Derived from hardware details like MAC address.
  * **Apple is apparently starting to remove access to the UDID (Unique Device IDentifier) in iOS5**
  * **UDID is deprecated; we are not allowed to get UDID due to user privacy purposes. Apple does not allow to get any identifiers that uniquely identifies a device, such as IMEI, MAC address, UDID etc.**

* **IDFV** (Identifier for Vendor) A vendor is defined by the first two parts of the reverse DNS formatted CFBundleIdentifier. 
  * For example, com.2359media.app1 and com.2359media.app2 would have the same identifierForVendor. 
  * But my.hungrygowhere.iphoneapp and com.2359media.hgwm would get a different identifierForVendor.
