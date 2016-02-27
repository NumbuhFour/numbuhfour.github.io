---
layout: post
title: Raspberry Pi Zero Super Gadget
---

So I just got a [RaspberryPi Zero](#) in the mail a few days ago, and found a way to turn it into a plug-and-play flash drive and computer combo, using just one OTG cable for both power and data. Its a real neat trick I picked up from [this blog post](http://pi.gbaman.info/?p=699), but I took it just a slight step forward.

## features

Power and use your RaspberryPi Zero using only one Micro USB cable! Plug it into a computer and SSH into pi@169.254.54.54 to access it! Then at a flip of a switch, it becomes a flash-drive for easy access to your Pi's files!

The project is simple, you tell your RasPi0 to pretend to be a gadget instead of a host on its second USB port. Normally the Pi expects to be the host since it expects things that get plugged in to be gadgets like a mouse or flash drive, things that generally don't think for themselves and are just a tool to the host. But the RasPi0's USB port was designed to support being a gadget, which means all that's left is some software to communicate with a host computer. Fortunately Raspian Jessie comes with a few of these as kernel modules which you can turn on to do various things. I found the most useful would be g_ether and g_mass_storage.

g_ether lets you create an ad-hoc network between your gadget (the Pi) and the host computer. In short this would mean you could SSH into your Pi over a USB cable without having to plug in an Ethernet cable or WiFi dongle.

g_mass_storage makes your Pi pretend to be a flash drive, so that the host computer can access files on the Pi from its file browser.

My reasoning for picking these was this: I wanted a portable computer that I could plug in anywhere and instantly work from, and should I need to copy project files, I wanted that to be easy as well. So my solution was to add a physical switch on the GPIO pins that would switch between the two modes.

## Implementation

The majority of the work was done just by following the instructions laid out [over here](https://gist.github.com/gbaman/50b6cca61dd1c3f88f41) which came from the blog post. I only made two modifications.  
 1) **ignore step 6 regarding adding your chosen module to /etc/modules**, I was going to do that myself later.  
 2) was to increase the size of the flash drive partition. I changed the command ```sudo dd if=/dev/zero of=/piusb.bin bs=512 count=2880``` from its ~1.5MB to about 2GB ```sudo dd if=/dev/zero of=/piusb.bin bs=1M count=2000``` since that was where I planned on storing all my project data. Note that the second command will take significantly longer (about 10 minutes for me). This also required some partitioning because for some reason that I couldn't figure out, g_mass_storage didn't like the bigger bin file. So using [this](http://www.linux-usb.org/gadget/file_storage.html) guide, I partitioned the .bin file. I kept the number of sectors and heads the same, but I used 32768 cylinders. (2GB = 2097152KB, 2097152KB/64tracks = 32768 cylinders. Don't use google for these calculations, use an [actual byte converter](http://www.unitconversion.org/unit_converter/data-storage.html) )  

The next part was writing something that would listen for a GPIO switch and switch out the current kernel module accordingly. For this I decided to make a daemon script in /etc/init.d so that it could be turned on and off as a service and would start during boot (g_ether seems to take a few seconds to activate, so the earlier the better).

Before this I had no experience creating daemons, so take my work with a huge grain of salt. You can view my init.d script [here](#) as well as the actual GPIO-reading script [here](#). The init.d script is what is called by the OS when it wants to turn on your service, then the init.d script runs my GPIO-reading script, while also making sure only one is ever running at a time.

The last step was to wire a switch onto pin 7 and ground, and since they were adjacent pins it was as easy as just soldering a switch to the Pi.
[IMAGE](#)

And the project is done!

## Limitations

For some reason, I cannot get windows to allow internet-sharing over the USB connection. The blog post cites that unix systems have it easier, but I don't have one to test it.

Copying files and projects onto the flash-drive portion of the device can be rather slow and sometimes fails saying 'the filename is too big' which I'm still unsure how to handle. 
