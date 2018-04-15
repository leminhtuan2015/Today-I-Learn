### How to Debug Your Android App over WiFi
---------------------

### How to Debug Your Android App over WiFi

* You can connect **Android Studio** with **SmartPhone** over **Wifi**

* Step 1: You need to connect your device to your computer via USB cable. 
  * Make sure USB debugging is working. You can check if it shows up when running 

```sh
adb devices
```

* Step 2: 

```sh
adb tcpip 5555
```

* Step 3:

  * Disconnect your device (remove the USB cable).
  
* Step 4:
  * Go to the Settings -> About phone -> Status to view the IP address of your phone.
  
* Step 5: 

```sh
adb connect <IP address of your device>:5555
```

* Step 6: If you run adb devices again, you should see your device.

```sh
adb devices
```
