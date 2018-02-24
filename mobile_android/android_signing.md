### keystore.properties

```gradle
# Group_Go : keytool -list -v -keystore groupgo_release.keystore
# package name :
# SHA1: 5A:17:45:37:FE:E7:3E:A5:CE:AF:EF:3E:70:57:36:2E:F9:D5:BE:7A

storeFile=keystores/groupgo_release.keystore
keyAlias=groupgo_release
storePassword=LqEkejIL
keyPassword=LqEkejIL
```


### groupgo_release.keystore

```gradle
apply plugin: 'com.android.application'

//KEYSTORE
def keystorePropertiesFile = rootProject.file("keystores/keystore.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
//END KEYSTORE

android {
    //BEGIN signingConfigs
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
    //END signingConfigs

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
