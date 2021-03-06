### How to Debug Your Android App over WiFi
---------------------

### How to Debug Your Android App over WiFi

* You can connect **Android Studio**/**Xcode >=9** with **SmartPhone** over **Wifi**

## ANDROID

1. Connect the device via USB and make sure debugging is working, check by:
    * **adb devices**
2. **adb tcpip 5555**
3. Find the IP address of your smart phone with:
    * **adb shell netcfg** or **adb shell ifconfig** with 6.0 and higher
4. Connect ADB with your smart phone:
    * **adb connect <DEVICE_IP_ADDRESS>:5555**
5. Disconnect USB and proceed with wireless debugging.
6. adb -s <DEVICE_IP_ADDRESS>:5555 usb to switch back when done.


## IOS

1. Connect your device to your Mac with a Lightning cable.
2. Xcode > Window > Devices and Simulators > select **Connect via network** checkbox
3. Disconnect your device cabe.
