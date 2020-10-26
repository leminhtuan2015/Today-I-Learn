
### Amazon EC2
### Amazon Machine Images (AMI)
### Upgrade EC2

---------------------------------------

### Amazon EC2

* EC2 = Elastic Compute Cloud
* EC2 is the cloud computer for deploy sevices
* Overall you have three options for remote controlling an Ubuntu PC:
  * SSH: Secure Shell
  * VNC: Virtual Network Computing
  * RDP: Remote Desktop Protocol
  
* While many Linux users see SSH as their remote connection tool of choice, it lacks a graphical user interface (GUI)

### Amazon Machine Images (AMI)

* An Amazon Machine Image (AMI) provides the information required to launch an instance. 
* You must specify an AMI when you launch an instance. 
* You can launch multiple instances from a single AMI when you need multiple instances with the same configuration.
* Amazon provide default many AMI for use select when create the Amazon EC2
* You can make you own AMI from EC2 instance (this the same you make file `.GHO` from windown and then can install on other EC@ Instance)

### Upgrade EC2

* USE CASE: Upgrade instance from EC2 t3.small to EC2 t3.large
  * Step1: Make the AMI image from this t3.small instance
  * Step2: Create new instance t3.large
  * Step3: When launch t3.large specify the AMI you saved at step1
  * Step4: Done: t3.large will 100% the same data, users, configtions as t3.small
