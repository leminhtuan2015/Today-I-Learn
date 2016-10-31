## Hack data of any apps
Require: ROOTED DEVICE
### TERMINAL MAC
  ```
  app="APP_NAME"
  ```
### TERMINAL ANDROID
  ```
  app="APP_NAME"
  cd /data/data/$app
  cd /sdcard/$app
  ```
### HACK
GET DATA
  ```sh
  adb shell
  su
  app="APP_NAME"
  cp -r /data/data/$app/ /sdcard
  adb pull sdcard/$app/ ~/Desktop/$app
  ```
REMOVE DATA FROM SDCARD
  ```sh
  rm -r /sdcard/$app
  ```
