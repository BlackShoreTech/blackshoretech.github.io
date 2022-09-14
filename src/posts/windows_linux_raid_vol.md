---
title: 'Mounting Windows Raid Volume on Linux'
date: May 9, 2022
excerpt: ''
cover_image: 'https://blog.brendanscullion.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FGNyjCePVRs8%2Fupload%2Fv1652106549467%2FmESFQUaRV.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
---
#### Estimated time: 5 mins

My current PC setup includes 2 SSD’s, one for my Linux (Manjaro) installation and one for windows 10, I then have 2 spinning disks in raid 0 that I use for mass storage and backups etc. I switch between Linux and Windows regularly and need access to the drives on each system. 

### 1. Map Storage devices devices
The first thing you need to do is get the operating system to recognise the raid pair as one single drive (single UUID)
```bash
sudo pacman -S libldm
# On ubuntu
sudo apt-get install ldmtool
```
### 2. Create device-mapper devices for all volumes
Copy the name if the drive (ldm_vol...) as you'll need it. 
```bash
sudo ldmtool create all
[
  "ldm_vol_DESKTOP-XXXXXX-Dg0_Volume1"
]
```
Cool so now I have a storage device that's recognised by the operating system

### 3. Mount Volume
```bash
sudo mkdir -p /mnt/DATA
sudo mount /dev/mapper/ldm_vol_DESKTOP-XXXXXXX-Dg0_Volume1 /mnt/DATA 
```
This works, but every time I restart my machine I'm going to have to do this again. so lets make it permanent. 

### 4. Create a systemd service config for ldmtool
```bash
sudo vim /etc/systemd/system/ldmtool.service 
```
```
[Unit]
Description=Windows Dynamic Disk Mount
After=local-fs-pre.target
Before=local-fs.target
DefaultDependencies=no

[Service]
Type=simple
User=root
ExecStart=/usr/bin/ldmtool create all

[Install]
WantedBy=local-fs.target
Enable the service
```
### 5. Enable the service so that it runs after each reboot. 
```sh
sudo systemctl enable ldmtool.service
```
### 6. Add file system to `fstab`
```bash
sudo vim /etc/fstab
```
Append to the bottom of the file
```
# Mount Windows raid Directory
/dev/mapper/ldm_vol_DESKTOP-XXXXXXX-Dg0_Volume1   /mnt/DATA   ntfs  rw,noatime      0 0
```
And I’m done. Just reboot the PC to confirm it works.

Alternatively, you can reference the drive using the UUID which is recommended by some people but i couldn't say exactly why that is. to do this you’ll need to find the UUID of the drive.
```bash
lsblk -o NAME,UUID   /dev/mapper/ldm_vol_DESKTOP-XXXXXXX-Dg0_Volume1
                                                                                                                             
NAME                                UUID
ldm_vol_DESKTOP-XXXXXXX-Dg0_Volume1 D26C43A96C438767
```
With this information the entry in the /etc/fstab will be.
```
# Mount Windows raid Directory
UUID=D26C43A96C438767           /mnt/DATA       ntfs    rw,noatime      0 0
```