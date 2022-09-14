---
title: Virtual CAN-BUS simulator (Virtual ECU)
date: May 9, 2022
excerpt: ''
cover_image: 'https://blog.brendanscullion.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FKVPRz5JEDbc%2Fupload%2Fv1652106957021%2FtZQ5ZUVIo.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
---

While developing some monitoring applications for a Raspberry-Pi car computer, I found that writing code on my laptop while sitting in the front seat of my car is not the most productive way to do things. What's needed is some sort of virtual ECU, and i have just the solution. 

#### In short my solution is this:
  1. Take a can recording of the car starting up and running for a little while
  2. Create a virtual can network device
  3. replay the recording on an infinite loop
  4. package it up nicely so that I can start the simulation on demand
![cansim-demo-2.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1652107126520/ODP7DeD6f.gif)

1. ### Record Some Data
This may be different for other cars but for my disco 3, I need to wait 5 minutes after turning the car off for the ECU to go to sleep. 
Once the ECU is asleep I start the recording. 
```bash
candump can0 -l
```
I start the car and let it run for 5 minutes or so, later on I’ll redo this and take the car for a spin around the town but for now this is enough for me. so I `CTL-C` the recording and I get a file named `candump-2020-04-14_202239.log`. I rename this to something with a little more meaning (“candump-landrover-discovery-3-vcan0.log”)

2. ### Configure Virtual CAN device
The vcan device is basically another network device so configuring it is pretty straight forward. 
```bash
sudo modprobe vcan
sudo ip link add dev vcan0 type vcan
sudo ip link set up vcan0
```
3. ### Replay CAN Recording
Now i just need to replay my recording back into vcan0.
```bash
canplayer -I candump-landrover-discovery-3-vcan0.log -l i vcan0=slcan0
```
By default canplayer will replay the file via the same device that it was captured on (`slcan0`). to get around this i need to specify the `vcan0` as new device, hence `vcan0=slcan0`

4. ### Create cansim service
Finally I want to be able to start the simulation on demand. I do this by creating a systemd service config

  ```bash
sudo vim /lib/systemd/system/cansim.service
```

```bash
[Unit]
Description=Canbus simulator
After=network.target

[Service]
Label=cansim
Type=exec
Environment=CANDATA=/mnt/DATA/sharedfolder/candump-landrover-discovery-3-vcan0.log
Environment=LOG_INTERFACE=slcan0

ExecStartPre=modprobe vcan
ExecStartPre=-ip link add dev vcan0 type vcan 
ExecStartPre=ip link set up vcan0
ExecStart=canplayer -I $CANDATA -l i vcan0=${LOG_INTERFACE}

ExecStop=/bin/kill -s TERM $MAINPID
PIDFile=/run/cansim/cansim.pid
TimeoutStopSec=0
```
Now I can start the simulation whenever I need it with
```bash
systemctl start cansim
```