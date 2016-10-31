## Hack data of any apps

Require: ROOTED DEVICE
```
  su
  cp -r data/data/com.hltcorp.gre sdcard/
  adb pull sdcard/com.hltcorp.gre/ ~/Desktop
```


```sh
adb shell
su
app="APP_NAME"

cp -r /data/data/$app /sdcard

adb pull sdcard/$app/ ~/Desktop
``
