## What is **Gradle** ?

- Like **Ant** or **Maven**, Gradle is a build tool.
- Gradle can build multiple languages such as :
  - Java
  - Python
  - JavaScript
  - Scala
  - C++
  - Android
  - IOS
  - Hadoop
  - ......

- Gradle is the official build system for Android.

## Gradle HelloWorld

- Step 1: Install **gradle** on system.

- Step 2: Create  a file calles **build.gradle**
  ```
    task helloWorld << { 
      println 'hello, world'
    }
  ```
- Step 3:
  ```
    gradle -q helloworld
    
    # hello, world
  ```
  
## Gradle Building A Java Program.

- Step 1: Create  a file calles **build.gradle**
  ```
    #This file is called build.gradle
    apply plugin: 'java'
  ```
  
- Step 2: Create folders source code.
  - A Java project source code must be placed at : **src/main/java**

  ```
  mkdir -p src/main/java/com/leminhtuan
  ```

- Step 3: Create source Java code.

  - src/main/java/com/leminhtuan/HelloWorld.java

  ```
    public class HelloWorld {
      public static void main(String args[]) {
        System.out.println("hello, world"); 
      }
    }
  ```
  
- Step 4: Build project

  ```
    gradle build
    
    # The results (Class file) will be generated at build/ folder.
  ```
  
- Step 5: Run project
  ```
    $ java -cp build/classes/main/ com.leminhtuan.HelloWorld
    
    hello, world
  ```
  
## Gradle Building A Android Project.

  - Step 0: Dowload Android SDK and config ANDROID_HOME envirment variable.
    ```
      ANDROID_HOME="path/to/android/sdk"
      PATH="$PATH:ANDROID_HOME"
    ```
  
  - Step 1: Create a project folders structure.
    
    ```
      mkdir -p src/main/java/org/hello
      mkdir -p src/main/res/values/
      mkdir -p src/main/res/layout/
    ```
    
  - Step 2: Create the ** Android Manifest** file : 
    - src/main/AndroidManifest.xml

    ```
    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
        package="org.hello"
        android:versionCode="1"
        android:versionName="1.0.0" >
    
        <application android:label="@string/app_name" >
            <activity
                android:name=".HelloActivity"
                android:label="@string/app_name" >
                <intent-filter>
                    <action android:name="android.intent.action.MAIN" />
                    <category android:name="android.intent.category.LAUNCHER" />
                </intent-filter>
            </activity>
        </application>
    
    </manifest>
    ```
    
  - Step 3: Add a text string.
    - src/main/res/values/strings.xml
    
    ```
      <?xml version="1.0" encoding="utf-8"?>
      <resources>
          <string name="app_name">Android Gradle</string>
      </resources>
    ```

  - Step 4: Add a layout.
    - src/main/res/layout/hello_layout.xml

    ```
      <?xml version="1.0" encoding="utf-8"?>
      <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
          android:orientation="vertical"
          android:layout_width="fill_parent"
          android:layout_height="fill_parent"
          >
      <TextView
          android:id="@+id/text_view"
          android:layout_width="fill_parent"
          android:layout_height="wrap_content"
          />
      </LinearLayout>
    ```
  - Step 5: Create the Main Activity.
    - src/main/java/org/hello/HelloActivity.java

  ```
    package org.hello;
    
    import android.app.Activity;
    import android.os.Bundle;
    import android.widget.TextView;
    
    public class HelloActivity extends Activity {
    
        @Override
        public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.hello_layout);
        }
    
          @Override
          public void onStart() {
              super.onStart();
              TextView textView = (TextView) findViewById(R.id.text_view);
              textView.setText("Hello world!");
          }
      
      }
    ```
  - Step 6: Create build.gradle file
    - build.gradle placed at root of project (like build.xml of ant)
  
  ```
    buildscript {
        repositories {
            jcenter()
        }
    
        dependencies {
            classpath 'com.android.tools.build:gradle:2.1.2'
        }
    }
    
    apply plugin: 'com.android.application'
    
    android {
        compileSdkVersion 22
        buildToolsVersion "22.0.1"
    }
  ```
  
  - Step 7: Build Android -> APK
  ```
    gradle build
  ```

