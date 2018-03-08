### Android Version History
### Gradle Build Config Version

--------------------

### Android Version History

|   Code name	|   Version number	|   Initial release date |   API leve.  |   Support status|
|--: 		    |--:			    |--:                     |--:           |--:              |
|   			|      1.0          | September 23, 2008     |      1       |   Unsupported   |
|   			|      1.1          |February 9, 2009        |      2       |   Unsupported  |
|Cupcake        |      1.5			|  April 27, 2009        |      3       |    Unsupported |
|Donut          |      1.6		    |  September 15, 2009    |      4       |    Unsupported |
|Eclair         |      2.0 - 2.1	|  October 26, 2009      |      5-7     |    Unsupported |
|Froyo          |      2.2-2.2.3	|  May 20, 2010          |       8      |    Unsupported |
|Gingerbread    |      2.3-2.3.7    |  December 6, 2010      |     9–10     |    Unsupported |
|Honeycomb      |      3.0-3.2.6	|  February 22, 2011     |     11–13    |    Unsupported |
|Ice Cream Sandwich|  4.0-4.0.4	    |  October 18, 2011      |     14–15    |    Unsupported |
|Jelly Bean     |      4.1-4.3.1    |  July 9, 2012          |      16–18   |    Unsupported |
|KitKat         |      4.4-4.4.4	|  October 31, 2013      |      19      |    Supported   |
|Lollipop (L)   |      5.0–5.1.1    |  November 12, 2014     |      21–22   |    Supported   |
|Marshmallow (M)|   6.0–6.0.1       |  October 5, 2015       |       23     |    Supported   |
|**Nougat (N)** |  **7.0–7.1.2**    |  **August 22, 2016**   |   **24-25**  | **Supported**  |
|O              |      8.0			|  TBA                   |       26     |    Beta        |


### Gradle Build Config Version
```
android {
    compileSdkVersion 25
    buildToolsVersion "25.0.2"
    defaultConfig {
        applicationId "com.fuji.platform"
        minSdkVersion 16
        targetSdkVersion 25
        versionCode 17032000
        versionName "1.0"
    }
}
```

* **minSdkVersion** (lowest possible SDK)
* **compileSdkVersion** (highest possible SDK)
* **minSdkVersion** <= **targetSdkVersion** <= **compileSdkVersion**
* **buildToolsVersion** is the version of the compilers
* **targetSdkVersion** has mean nothing with how your app is compiled or what APIs you can utilize, If you do not specify the targetSdkVersion, it defaults to the minSdkVersion


#### compileSdkVersion

* The **compileSdkVersion** is the version of the API the app is compiled against
* If you use API 16 features but set compileSdkVersion to 15, you will get a compilation error
* If you use API 15 features but set compileSdkVersion to 16, that is ok
  
#### buildToolsVersion

* **buildToolsVersion** is the version of the compilers (aapt, dx, renderscript compiler, etc...) that you want to use


