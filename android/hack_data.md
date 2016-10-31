## Hack data of any apps

Require: ROOTED DEVICE

### TERMINAL ANDROID
  ```
  app="APP_NAME"
  ```
### TERMINAL MAC
  ```
  app="APP_NAME"
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
