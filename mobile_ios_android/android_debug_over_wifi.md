### How to Debug Your Android App over WiFi
---------------------

### How to Debug Your Android App over WiFi

* You can connect **Android Studio** with **SmartPhone** over **Wifi**

1. Connect the device via USB and make sure debugging is working, check by (**adb devices**)
2. **adb tcpip 5555**
3. Find the IP address with **adb shell netcfg** or **adb shell ifconfig** with 6.0 and higher
4. **adb connect <DEVICE_IP_ADDRESS>:5555**
5. Disconnect USB and proceed with wireless debugging.
6. adb -s <DEVICE_IP_ADDRESS>:5555 usb to switch back when done.
