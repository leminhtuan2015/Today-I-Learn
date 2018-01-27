### MacOS (Host) shared folder with VirtualBox Ubuntu
### MacOS (Host) shared folder with VirtualBox Windown
-------------------------
### MacOS (Host) shared folder with VirtualBox Ubuntu


* Step 1: Create Shared Folder on **Mac**
  * **On Mac** -> In Menu bar of VirtualBox -> Devices -> Shared Folders -> Shared Folders Setting
    * Create Shared Folder on Mac with (**Shared Name** ; **Shared Folder Path**)
    * (**Shared Name** ; **Shared Folder Path**) = (**Shared** ; **/MacOS/Document/Shared_Folder**)
    
* Step 2: Install plugin for VirtualBox Ubuntu
  * **On Mac** -> In Menu bar of VirtualBox -> Devices -> Shared Folders -> Insert Guest Additions Cd Image
  
* Step 3: Create Shared Folder on **VirtualBox Ubuntu**
  * **On VirtualBox Ubuntu** -> create a shared folder (**/Ubuntu/Document/Shared_Folder**)
  
* Step 4: Mount Shared folder on **VirtualBox Ubuntu**
  * Linking **/Ubuntu/Document/Shared_Folder** to **/MacOS/Document/Shared_Folder**
  
  ```sh
      sudo mount -t vboxsf -o uid=1000,gid=1000 Shared /Ubuntu/Document/Shared_Folder
      
      # Shared is the shared folder name at step 1
  ```


### MacOS (Host) shared folder with VirtualBox Windown

* VirtualBox Manager: Open the Shared Folders setting and click the '+' icon to add a new folder. Then, populate the Folder Path (or use the drop-down to navigate) with the folder you want shared and make sure "Auto-Mount" and "Make Permanent" are checked.
* Once Windows is running, goto the Devices menu (at the top of the VirtualBox Manager window) and select "Insert Guest Additions CD Image...". Cycle through the prompts and once you finish installing, let it reboot.

* After Windows reboots, your new drive should show up as a Network Drive in Windows Explorer.
