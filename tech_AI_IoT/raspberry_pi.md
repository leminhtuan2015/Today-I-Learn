## I. Raspberry

### 1. Setup Raspberry PI
### 2. Installation OS on Raspberry PI
### 3. Raspberry PI Usage
### 4. Raspberry PI Configuration
### 5. Raspberry PI Remote Access
### 6. Raspberry PI GPIO

## II. Intel Movidius

### 1. Introduction Neural Compute SDK
### 2. Frameworks
### 3. Installation Intel Movidius
### 4. API Intel Movidius


## II. Edge AI

### 1. What is Edge AI?
### 2. What is Edge AI Used For?
### 3. Advantages/Disadvantages of Edge AI

<br>

----------------------------------------

<br>

## I. Raspberry

### 1. Setup Raspberry PI

#### 1.1 Essential

* **SD card**
    * Recommend a minimum of 8GB class 4 or class 10 microSD card
    *  Only the Raspberry Pi 3A+, 3B+ and Compute Module 3+ can boot from an SD card larger than 256 GB. This is because there was a bug in the SoC used on previous models of Pi.
    *  From the Model B+ (2014) onwards, a micro SD card is required.
* **Display and connectivity cable**
	* HDMI/DVI monitor
* **Keyboard and mouse**
	* Standard USB keyboard and mouse will work with your Raspberry Pi.
* **Power supply**
	* The Pi (models pre 4B) is powered by a USB Micro 
	* The Pi (model 4B) USB Type-C power supply 
	* Pi power supply like most standard mobile phone chargers.

#### Shutdown

* Make sure you are shutting your Raspberry Pi down properly before powering it off. Type `sudo halt` and wait for the Pi to signal it is ready to be powered off by flashing the activity LED

### 2. Installation OS on Raspberry PI

* Raspbian is the recommended operating system for normal use on a Raspberry Pi.

* Raspbian is a free operating system based on **Debian**, optimised for the Raspberry Pi hardware. Raspbian comes with over 35,000 packages: precompiled software bundled in a nice format for easy installation on your Raspberry Pi.

* Raspbian is a community project under active development, with an emphasis on improving the stability and performance of as many Debian packages as possible.

* The official OS of Raspberry PI is **Raspbian**
* Pi using the SD card as the storage
* To install a Raspberry Pi operating system image on an SD card, you will need another computer with an SD card reader to install the image.
* Using **Raspberry Pi Imager** for writing the image to the SD card

#### Steps for installing operating system images

* **Step 1**: Download the latest version of **Raspberry Pi Imager** and install it on your computer.
* **Step 2**: Connect an SD card reader with the SD card inside.
* **Step 3**: Open Raspberry Pi Imager and choose the required OS from the list presented.
* **Step 4**: Choose the SD card you wish to write your image to.
* **Step 5**: Review your selections and click 'WRITE' to begin writing data to the SD card.
* **Step 6**: Boot your new OS, You can now insert the SD card into the Raspberry Pi and power it up. For the official Raspbian OS, if you need to manually log in, the default user name is **pi**, with password **raspberry**.
* **Step 7**: Make sure you are shutting your Raspberry Pi down properly before powering it off. Type `sudo halt` and wait for the Pi to signal it is ready to be powered off by flashing the activity LED


### 3. Raspberry PI Usage

#### 3.1. Camera (Using Camera Module recommand)

* **Camera Module**: Raspberry PI support the **Camera Module** is capable of taking full HD 1080p photo and video and can be controlled programmatically
* Note that the quality and configurability of the camera module is **highly superior** to a standard USB webcam.


#### 3.2. Webcams (Using a standard USB webcam)

* Raspberry PI also support a standard USB webcam instead of the Raspberry Pi camera module to take pictures and video on the Raspberry Pi.

#### 3.3. GPIO

* A powerful feature of the Raspberry Pi is the row of GPIO (general-purpose input/output) pins along the top edge of the board. A 40-pin GPIO header is found on all current Raspberry Pi boards (unpopulated on Pi Zero and Pi Zero W). Prior to the Pi 1 Model B+ (2014), boards comprised a shorter 26-pin header.



### 4. Raspberry PI Configuration

* raspi-config
  * The Raspberry Pi configuration tool in Raspbian, which allows you to easily enable features such as the camera, and to change your specific settings such as keyboard layout
* config.txt
  * The Raspberry Pi configuration file
* TCP/IP networking
  * Configuring the TCP/IP network stack on the Raspberry Pi
* Connect to a wireless network
  * Configuring your Pi to connect to a wireless network using the Raspberry Pi 4, Raspberry Pi 3 or Pi Zero W's inbuilt wireless connectivity, or a USB wireless dongle
* Wireless access point
  * Configuring your Pi as a wireless access point using the Raspberry Pi 4, Raspberry Pi 3, or Raspberry Pi Zero W's inbuilt wireless connectivity, or a USB wireless dongle
* Using a proxy
  * Setting up your Pi to access the internet via a proxy server
* HDMI Config
  * Setting up your HDMI device, including custom settings
* Screen Configuration Editor
  * Setting up your display device's resolution, frequency and orientation using the provided graphical editor
* Audio config
  * Switching your audio output between HDMI and the 3.5mm jack
* Camera config
  * Installing and setting up the Raspberry Pi camera board
* External storage config
  * Mounting and setting up external storage on a Raspberry Pi
* Localisation
  * Setting up your Pi to work in your local language and time zone
* Default pin configuration
  * Changing the default pin states.
* Device Trees config
  * Device Trees, overlays, and parameters
* Kernel command line
  * Setting options in the kernel command line
* UART configuration
  * Setting up the on-board UARTs
* Firmware warning icons
  * Description of warning icons displayed if the firmware detects issues
* LED warning flash codes
  * Description of LED warning flashes that are shown if a Pi fails to boot or has to shut down
* Securing your Raspberry Pi
  * Some basic advice for making your Raspberry Pi more secure
* Screensaver
  * Configuring the screen saver and screen blanking
* The boot folder
  * What it's for and what's in it
* Network File System (NFS)
  * How to set up a NFS and connect clients to it

### 5. Raspberry PI Remote Access

* Sometimes you need to access a Raspberry Pi without connecting it to a monitor. 
* Perhaps the Pi is embedded in something like a robot, or you may want to view some information from it from elsewhere. 
* Maybe you simply don't have a spare monitor! You can access your Raspberry Pi remotely.

* **VNC**
  * Remote access to the Pi's graphical interface, viewed in a window on another computer

* **SSH**
  * Access the command line of the Pi from another computer

* **SFTP**
  * Copy files between your Pi and another computer using SFTP (Secure File Transfer Protocol)
* **SCP**
  * Copy files between your Pi and another computer using SCP (Secure Copy Protocol)

* **rsync**
  * Synchronise folders between the Pi and another computer using rsync over SSH
* **FTP**
  * Copy files between your Pi and another computer using FTP (File Transfer Protocol)



### 6. Raspberry PI GPIO

#### GPIO

* GPIO = general-purpose input/output

* GPIO (General Purpose IO)
* SPI (Serial Peripheral Interface)
* I2C (Inter-integrated Circuit)
* UART (Universal Asyncronous Receiver/Transmitter)
* Ground
* 5v (Power)
* 3.3v (Power)

#### GPIO Outputs

* A GPIO pin designated as an output pin can be set to high (3V3) or low (0V).

#### GPIO Inputs

* A GPIO pin designated as an input pin can be read as high (3V3) or low (0V). 
* This is made easier with the use of internal pull-up or pull-down resistors. 
* Pins GPIO2 and GPIO3 have fixed pull-up resistors, but for other pins this can be configured in software.

#### GPIO pinout

```sh
#Accessed on the Raspberry Pi by opening a terminal window and running the command pinout

pinout
```

#### GPIO types

* https://pinout.xyz/pinout/i2c

* **GPIO I2C** (Inter Integrated Circuit)
  * **I2C pins** are an extremely useful way to talk to many different types of external peripheral

* **GPIO Ground**
  * The Ground pins on the Raspberry Pi are all electrically connected
  
* **GPIO SPI** (Serial Peripheral Interface)

  * Known as the four-wire serial bus, SPI lets you attach multiple compatible devices to a single set of pins by assigning them different chip-select pins.
  

#### GPIO in Python (Programming with GPIO)

* Controlling GPIO devices with Python. To control an LED connected to GPIO17, you can use this code:

```py

from gpiozero import LED
from time import sleep

led = LED(17)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)

```


  
## II. Intel Movidius

### 1. Introduction

* The Intel Movidius Neural Compute SDK (Intel Movidius NCSDK) : enables rapid prototyping and deployment of deep neural networks (DNNs) on compatible neural compute devices
* The **NCSDK** includes a set of software tools to compile, profile, and check (validate) DNNs as well as the Intel® Movidius™ Neural Compute API (Intel® Movidius™ NCAPI) for application development in C/C++ or Python.


### 2. Frameworks


* Intel Movidius NCSDK support **Caffe** or **TensorFlow** 
* **Caffe** and **TensorFlow** are deep learning framework developed by Berkeley AI Research and Google


### 3. Installation Intel Movidius

#### Prerequisites
* Compatible neural compute device (like the Intel® Movidius™ Neural Compute Stick)
* Git
* Development computer with a supported OS:
	* x86-64 with Ubuntu (64 bit) 16.04 Desktop
	* Raspberry Pi 3 with Raspbian Stretch (starting with SDK 1.09.xx)
	* Internet connection
	* USB camera (optional)

#### Desktop Installation

```sh
git clone -b ncsdk2 http://github.com/Movidius/ncsdk && cd ncsdk && make install
```

#### Raspberry Pi Installation

* Recommend a 16GB SD card for a full NCSDK installation.
* You will likely need to increase the swapfile size on the Raspberry Pi in order to successfully complete NCSDK and/or OpenCV installation. To increase the swapfile size, edit the value of CONF_SWAPSIZE in /etc/dphys-swapfile:

```sh
sudo nano /etc/dphys-swapfile
```

* The default value is 100 (MB). We recommend that you change this to 1024 (MB) or greater.

* Then restart the swapfile service:

```sh
sudo /etc/init.d/dphys-swapfile restart
```

* Proceed with installation:

```sh
git clone -b ncsdk2 http://github.com/Movidius/ncsdk && cd ncsdk && make install
```

* After you have installed the NCSDK (and optionally OpenCV), you should change the swapfile size back to 100 MB.

#### Uninstallation

```sh
make uninstall
```

### 4. API Intel Movidius

#### Neural Compute API Overview

* NCSDK: Neural Compute SDK
* NCAPI: Neural Compute API
* mvncapi.py: Movidius Neural Compute API
* Code: https://github.com/movidius/ncsdk

* Applications for performing inferences with the Intel® Movidius™ Neural Compute SDK (Intel® Movidius™ NCSDK) can be developed in either C/C++ or Python. 
* The Neural Compute API (NCAPI) provides a software interface to load network graphs and run inferences on neural compute devices.

* The Intel Movidius Neural Compute SDK (NCSDK) comes with a Python Language API that enables applications that utilize hardware accelerated Deep Neural Networks via neural compute devices

* The Python API is provided as a single Python module (**mvncapi.py**), which is placed on the development computer when the NCSDK is installed. It has been validated with Python 2.7 and 3.5.

## II. Edge AI

### 1. What is Edge AI?

* In the IT fields The word **Edge** is opposite of the **Cloud**
* The same **Edge Computing vs Cloud Computing**
* **Edge AI** basically means running AI algorithms locally on a hardware device using edge computing where the AI algorithms are based on the data that are created on the device without requiring any connection (without internet connection)

* **Edge AI** This allows you to process data, running machine learning algorithms on locally owned computers or embedded systems in less than a few milliseconds which gives you real-time information.

* AI processing today is mostly done in a cloud-based data center with deep learning models that require heavy compute capacity. However, with **Edge AI**, AI processing is now moving part of the AI workflow to a locally device and keeping data constrained to a locally device.


### 2. What is Edge AI Used For?

* Surveillance and Monitoring Purposes
* Autonomous Vehicles
* Smart Speakers

### 3. Advantages/Disadvantages of Edge AI

#### Advantages of Edge AI

* **Reduced Costs**
  * With Edge AI, costs for data communication and bandwidth costs will be reduced as fewer data will be transmitted. 
  * Costs of performing AI processing in the cloud is much more expensive too due to the cost of AI device hardware


* **Security**

  * When using AI in cases like security cameras, autonomous cars, drones, etc, data is a big concern for people. With Edge AI, as you are processing data locally, the problem can be avoided with streaming without uploading a lot of data to the cloud which makes you vulnerable from a privacy perspective

* **Highly Responsive/Speed**

  * As you probably know, Edge AI devices are able to process data really fast compared to centralized IoT models. They allow real-time operations like data creation, decision, and action as insights are immediately processed within the same hardware making them suitable for use in applications where milliseconds matter like self-driving cars.

#### Disadvantages of Edge AI

* **More Storage Space**

  * Edge AI does take a considerably higher storage space on your device.

* **Maintenance**

  * Unlike a centralized cloud architecture, edge AI is a distributed system. Which means that there are more various network combinations with several computing nodes. 
  * Edge AI requires higher maintenance cost than a centralized infrastructure. 

  
  









