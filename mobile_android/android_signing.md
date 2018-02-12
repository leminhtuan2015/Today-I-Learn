### keystore.properties

```gradle
# SHINCHAN
# package name : vn.fujigame.shinchan.runner
# SHA1: 52:9B:66:5E:55:2F:F4:BC:13:AA:C7:A9:DD:8F:38:73:C6:BD:44:0D

storeFile=groupgo_release.keystore
storePassword=5RfyRJxiCrMc
keyPassword=DWGwjqdsf7v8
keyAlias=ShinchanKasukabeRunner
```


### groupgo_release.keystore

```gradle
apply plugin: 'com.android.application'

//KEYSTORE
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
//END KEYSTORE

android {
    signingConfigs {
        release {
            storeFile rootProject.file(keystoreProperties['storeFile'])
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storePassword keystoreProperties['storePassword']
        }

        debug {
            storeFile rootProject.file(keystoreProperties['storeFile'])
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storePassword keystoreProperties['storePassword']
        }
    }
    compileSdkVersion 25
    buildToolsVersion "25.0.2"
    defaultConfig {
        applicationId "vn.fujigame.shinchan.runner"
        minSdkVersion 16
        targetSdkVersion 25
        versionCode 11
        versionName "1.1.1"
    }
    buildTypes {
        debug {
            minifyEnabled false
            signingConfig signingConfigs.release
        }
        release {
            minifyEnabled false
            signingConfig signingConfigs.release
        }
    }
}

```
