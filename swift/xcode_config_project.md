### Xcode config project

------------------------

### Xcode config project
  - General
  - Capabilities
  - Resource tags
  - Info
  - Build Settings
  - Build Phases
  - Build Rules
  - => All above items is the configs of one IOS Xcode project, the config file is stored at : 
    - ***[PROJECT_NAME].xcodeproj/project.pbxproj***
    
  ```
  Project_Name.xcodeproj/
	              xcuserdata
	              project.pbxproj // is the config file of Xcode project
  ```

#### [PROJECT_NAME].xcodeproj/project.pbxproj
```
0126DEF61E794D1100EAEA44 /* Debug */ = {
	isa = XCBuildConfiguration;
	baseConfigurationReference = 57281A89D701130301A891C8 /* Pods-FujiSDK-Test.debug.xcconfig */;
	buildSettings = {
		ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
		CLANG_ENABLE_MODULES = YES;
		"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
		DEVELOPMENT_TEAM = "";
		ENABLE_BITCODE = NO;
		FRAMEWORK_SEARCH_PATHS = (
			"$(inherited)",
			"$(PROJECT_DIR)/FujiSDK-Test/Frameworks",
		);
		INFOPLIST_FILE = "FujiSDK-Test/Info.plist";
		IPHONEOS_DEPLOYMENT_TARGET = 8.0;
		LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";
		PRODUCT_BUNDLE_IDENTIFIER = com.fuji.platform;
		PRODUCT_NAME = "$(TARGET_NAME)";
		PROVISIONING_PROFILE = "";
		PROVISIONING_PROFILE_SPECIFIER = "";
		SWIFT_OBJC_BRIDGING_HEADER = "FujiSDK-Test/FujiSDK-Test-Bridging-Header.h";
		SWIFT_OPTIMIZATION_LEVEL = "-Onone";
		SWIFT_VERSION = 3.0;
	};
	name = Debug;
};
```
