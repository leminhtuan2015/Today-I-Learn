
### Docker vs Virtual machine (VMs)

------------------------------------------------------------------------------------------------

### Docker vs Virtual machine (VMs)

![alt text](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/backend_tools/Docker/docker_vs_vm.png "Docker vs Virtual machine")

* Both **VMs** and **Docker containers** can help get the most out of available computer hardware and software resources. Containers are the new one, but VMs have been, and continue to be, tremendously popular in data centers of all sizes.

#### Virtual machine (VM)
* Virtual machine = virtualizing the computer system (OS, Ram, CPU)

* Virtual machine = virtualizing both OS + hardware

* A virtual machine (VM) is an **emulation of a computer system**. Put simply, it makes it possible to run what appear to be many separate computers on hardware that is actually one computer.

* VMs, however, can take up a lot of system resources. Each VM runs not just a full copy of an operating system, but a virtual copy of all the hardware that the operating system needs to run. This quickly adds up to a lot of RAM and CPU cycles. That’s still economical compared to running separate actual computers, but for some applications it can be overkill.

### Docker container

* Docker container = virtualizing ONLY OS 
* Docker container **DO NOT virtualizing hardware (Ram, CPU)**

* With Docker containers, instead of **virtualizing the computer system** like a virtual machine (VM), just the **OS is virtualized**.



