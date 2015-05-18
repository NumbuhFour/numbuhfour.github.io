---
layout: post
title: Lilywatch
---
### Lilywatch: a smartwatch powered by Arduino

## What is it?

A watch powered by a removable [Lilypad arduino](http://lilypadarduino.org/) and equipped with a bluetooth connection to my android phone.

![pics pics pics]()

This was a project I started for my Physical Media class that went way off course. The original premise was to make a small device that communicates with another device to create an interesting experience, but I quickly got distracted and made a watch instead (I made an 'experience' app for it too). 

The watch was something I already had rough plans for after designing a housing for a Lilypad during **my last PhysMed  project**(link). At the time, I really just wanted something I could plug my Lilypad into without having it permanently attached to a circuit. I wanted to have it available for other projects should they come up without compromising whatever project I'm taking it from. 

So, with that design already in hand, I took to improving it so I could turn it into a platform on which I could make whatever this 'experience' my next assignment called for. But in doing so, I got side-tracked testing to make sure it could do anything and ended up focusing on turning into a smartwatch.

## Features
 - Time keeping displayed in binary
 - Lilypad is removable for project swapping or testing
 - EEPROM (with wear-levelling) for config saving
 - Auto-light level (disable-able through config)
 - Notification for when an SMS is received
 - Watch alerts you to phone alarms
 - App-like programming structure
    Current 'apps'
      - Clock
      - Compass
      - Flashlight
      - Feature config menu
      - Time and brightness settings
 - On-board LED will freeze if something goes horribly wrong

## Intentions
#### Removable
    I can be a bit of a cheapskate when it comes to materials. I don't like using components in ways that would make them unusable for future prospects, and that was my number-one drive for keeping the Lilypad removable. Plus, there are times when testing is a whole lot easier with a Arduino board that isn't attached to anything. So the housing for the arduino is snapped in place and able to be removed and replaced with ease.
#### Sturdy
    Compared to my last project, where everything was sewn together in unforgiving leather, everything here is soldered together in a way to support daily movement as well as the removability of the board. (Truthfully I'm just so happy I don't have to deal with sewing wires in leather anymore)
#### Modular
    Wires are attached to the board by copper-coated foam pads which are pressed into the existing pads of the Lilypad to create a solid connection. This makes it easy to add more components should I ever find something worth attaching later on.
#### Configurable without Android programming
    The app which talks to the watch is in-essence just a relay for bluetooth communications and doesn't handle any logic. All the actual communications are handled by [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=en) which sends messages to the watch through the app when appropriate. I wanted to use Tasker because I didn't want to have to go plug my phone in to my computer to reprogram or change something. This was still technically expected to be a class project, so I was expected to work in class, and I wasn't going to setup the Android SDK on a school computer.

## Process

## Future Goals and Improvements
My goal now is to make this something worth wearing daily. To have it able to do enough that the bulkiness of it is outweighed by its usefulness. 

At this time though, some major improvements would be 
 - The bluetooth app. I'd like to have it handle more rather than let Tasker handle it all
 - Have a single housing, not the three pieces of the watch, battery and bluetooth separately
 - Arduino coding improvements. I haven't done a lot of research into this, but having all the code in one file is always a taboo
 - Move more control to android. Able to write and control whole states from the phone
 - Point the connection wires away from the wrist. At this time the power and bluetooth connectors are pointed straight where my wrist bends up, and it can be rather obnoxious.
 - The cap currently pops off if the strap is too tight. Perhaps moving the clamps 90&deg; to the would make it a little better.

Writing notes:
-Process
	-Printing watch
		-Improvemnts from last watch case
		-Holes
		-Foam pads on both sides
	-Neopixel
		-Soldering, no sewing. Stickytack
	-Sensors on the bottom
		-Glueing
		-Tight space
		-Foam cushion
	-Leather straps
	-Programmingggggg
		-Git! and Issues!
		-All one file :(
		-Pretty effects
		-States, binary, and button restrictions
		-refactor to multi file!
	-Battery
		-Nope to copter battery
		-Battery housing
			-Designed for big battery and charger. Basically second watch
			-Printing process & improvments
	-Wiring plug
		-Intentionally left pins available
		-Switch to prevent misloading
		-Temporary pin protector
	-Android
		-App
			-BlueTerm was open source and pointed to google examples
			-Edited bluetooth chat example to include intents for messaging via tasker
		-Tasker
			-Editible without computer
			-Handles events from phone
			-Able to call intents to app
	-Bluetooth
		-Wiring nice. Its growing
		%Flipped watch to left hand%
		-Stupid baud rate. Edited settings remotely
    - Unity
        -To use System.IO.Ports: ProjectSettings > Player settings > Change .Net 2.0 Subset  to .Net 2.0
		
	-IR Sensing
		-Wonky <100ms
		-Secondary arduinos. Need replacement
	-Homepage thingy
		-Leftover from another project
	-PHP events
		-SSEs are cool!
		-While loops
	-Streamus
		-Finally
		-What a good feeling it was to get it working with my phone
	
-Components
-Features
-Intentions
	-Removable
	-Sturdy
	-Programmable phone interface
	-Modular: Add things to it
-Improvements & goals
	-App needs work
	-Single housing, not two/three piece
	-Arduino coding improvements
	-Move more control to android. Able to write whole states from phone
    -point connection cables away from wrist
    -cap pops off if too tight