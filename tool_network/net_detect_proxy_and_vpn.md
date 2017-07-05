### By TimeZone - No Permission
### By Language - No Permission
### By Region - No Permission
### By Location - Permission

--------------------

### By TimeZone - No Permission
* Get TimeZone of IP
* Get TimeZone of device
* Compare TimeZone
  * If match => OK
  * If not => NG
### By Language - No Permission
* Get Language of IP
* Get Language of device
* Compare Language
  * If match => OK
  * If not => NG
  
  
### By Region - No Permission

```swift
   let locale = NSLocale.current
   let countryCode = locale.regionCode

   Utils.log(message: "countryCode ; " + countryCode!) // US , DE
```
  
### By Location
* Get Location of IP
* Get Location of device
* Compare Location
  * If match => OK
  * If not => NG
