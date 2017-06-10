### Build Fat Framework (armv7 - arm64)

--------------------------------

### Build Fat Framework (armv7 - arm64)

* https://stackoverflow.com/questions/39890114/creating-a-universal-framework-using-xcode-8

* By default IOS just build framework as arm64, and it not work for all devices.
* You should build framework as fat framework, so you can use that framework in all devices.

```
#!/bin/sh

rm -rf ~/Library/Developer/Xcode/DerivedData/

BUILD_DIR=build
CONFIGURATION=Release
PROJECT_NAME=FujiSDK
UNIVERSAL_OUTPUTFOLDER=${BUILD_DIR}/${CONFIGURATION}-universal

# make sure the output directory exists
mkdir -p "${UNIVERSAL_OUTPUTFOLDER}/iOS"

# Step 1. Build Device and Simulator versions on iOS
xcodebuild -workspace "${PROJECT_NAME}.xcworkspace" -scheme "${PROJECT_NAME}"  -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 6' clean build
xcodebuild -workspace "${PROJECT_NAME}.xcworkspace" -scheme "${PROJECT_NAME}" -sdk iphoneos clean build

# Step 2. Copy the framework structure (from iphoneos build) to the universal folder
cp -R "${BUILD_DIR}/${CONFIGURATION}-iphoneos/${PROJECT_NAME}.framework" "${UNIVERSAL_OUTPUTFOLDER}/iOS"

# Step 3. Create universal binary file using lipo and place the combined executable in the copied framework directory
lipo -create -output "${UNIVERSAL_OUTPUTFOLDER}/iOS/${PROJECT_NAME}.framework/${PROJECT_NAME}" "${BUILD_DIR}/${CONFIGURATION}-iphonesimulator/${PROJECT_NAME}.framework/${PROJECT_NAME}" "${BUILD_DIR}/${CONFIGURATION}-iphoneos/${PROJECT_NAME}.framework/${PROJECT_NAME}"

# Step 4. Convenience step to copy the framework to the project's directory
mkdir -p "${TMPDIR}/${PROJECT_NAME}/Frameworks/iOS"

cp -R "${UNIVERSAL_OUTPUTFOLDER}/iOS/${PROJECT_NAME}.framework" "${TMPDIR}/${PROJECT_NAME}/Frameworks/iOS"


# Step 6. Create .tar.gz file for posting on the binary repository
cd "${TMPDIR}"

# We nest the framework inside a Frameworks folder so that it unarchives correctly
tar -zcf "${PROJECT_NAME}.framework.tar.gz" "${PROJECT_NAME}/Frameworks/"
mv "${PROJECT_NAME}.framework.tar.gz" "${PROJECT_DIR}/"

# Step 7. Convenience step to open the project's directory in Finder
#open "${PROJECT_DIR}"

```
