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
 - Shake to return to clock
 - App-like programming structure
    Current 'apps'
      - Clock
      - Compass
      - Flashlight
      - Feature config menu
      - Time and brightness settings
 - On-board LED will freeze if something goes horribly wrong
 
## Materials TODO ADD LINKS
 - A Lilypad arduino
 - A Flora accel/mag sensor
 - An enclosed vibration motor
 - 7 Neopixels
 - 3.7v Li-ion battery
 - Adafruit Li-ion battery charger
 - Sparkfun Bluetooth Mate gold
 - A photoresistor
 - 2 Buttons
 - 1 Switch
 - 1 Transistor (check type)
 - 3D Printed housings
 - Some leather
 - Some 1.5mm foam (extracted from some case I had)
 - Copper tape

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

### Printing the Housing
    Since I already had a design from the last project, this was fairly easy. The only thing I did was make some improvements to the model. Namely I added holes in the bottom so connections could be made via the bottom of the watch. I wanted to do this because in the last project everything was attached to the cap, making removal of the cap difficult. That was a silly choice, but I learned.
    
    ![Pic of the progression of the case]()
    
    The battery housing had to be done from scratch for this project, though that wasn't hard. It may not be pretty, it's just a box, but it gets the job done. I wanted the battery to be it's own entity because I wanted to keep the charging circuit on-board. I also made sure that the cap for the battery housing was quickly removable so that if something goes horribly wrong, as it occasionally does with batteries, it's not so strongly fixed to my wrist.
    
    ![Battery housing pics]()

### Components
#### The Foam Ring
    Similar to the last project, I used a foam ring to do make all the connections directly with the board. Using some 1.5mm thick foam I had laying around in my materials box, I cut rings for the top and the bottom of the board that matched the radius of the Lilypad and were thick enough to cover most of the metal pads on already the board. Then I took some copper tape and taped the ring wherever there was a pad on the Lilypad I thought I would use, and made sure to place a a small wire with a loop on the end between the layers of the tape (I only looped around a little more than once to leave an overlap). That wire would be what I would make my soldered connections to, since in the last project I learned not to solder directly to the copper pads. That melted the foam, made the pads too hard, and in general was a terrible mess. 
    
    ![Pic of the foam ring and the little wire]()
    
    The bottom of the pad needed a little extra care, since the Lilypad I have doesn't come with connection pads on the bottom. This was easily fixed though with a little more copper tape. I just needed to make sure I scraped off some glue so that a connection could be made between the tape and the pad.
    
    ![Pic of the board with tape]()

#### Neopixels
    Neopixel attachment was kind of fun. This was mostly due to not having to sew through leather with my feeble, makeshift connectors. I was aware that there was already a product meant for this kind of project (see [Neopixel Ring](http://www.adafruit.com/products/1643)), but I knew I wouldn't be using the full ring, plus I already had some perfectly fine Neopixels laying around. 
    
    To solder them, I made an indent in some sticky putty (meant to hold posters on walls) using the face of the watch and laid out the Neopixels where they should go in relation to the watch. This kept them in place relative to each other while I soldered the necessary wires together. Then it was as easy as pulling it off as one thing and gluing it to the watch face. I soldered the power and ground wires to the little connector wires I made, and tucked a resistor under the trim of the cap for the data wire. It all was falling into place better than I expected.
    
    ![Pic of the wires with the resistor under the cap]()

#### Bottom Motor and Sensors
    The bottom sensors were attached kind of hap-hazardly. I didn't mean to do it that way, but I didn't really have a plan for them since I knew I'd be adding more sensors later. I just didn't know what. The vibration motor and its transistor went on first. I tried to make sure there was ample room for the future, but with so little room already, any effort made to that effect was unnoticeible. 
    
    Next came the Flora accel/mag sensor. I initally tried to make sure this wasn't placed permanently, but I only had two types of glue: Superglue and rubber cement. Rubber cement was too weak to hold it and the Superglue was obviously too strong. I tried mixing them to dilute the superglue, but that was silly and messy and the part was still stuck too strong. Oh well.
    
    ![Bottom pic]()
    
    The photo resistor came much later in the project, but adding it was pretty trivial. I obviously had to make the head of it peak out to the top, so I wrapped it up towards the cap and glued it to a square I cut off the little plastic thing the Neopixels came in. It fit miraculously well, and left the photoresistor tucked nicely into a corner.
    
    [!photo resistor pic]()
    
### Leather and Straps
    The leather for this was bought at Micheals (I'm pretty sure it's not real). I just got a small square, enough for this project and a few others. I cut it to fit and tied it down with some string and volia! That's done.
    
    ![Leather glamour shot]()
    
    The leather on the bottoms of the watch and battery housings were there to prevent the components from being an irritant, which they were. The leather helped immensly.
    
### Programming
    I call myself primarily a programmer, so this part of the project was the least daunting. However, I have never done anything so big with an Arduino before. I wish I had learned earlier that I could use multiple files, that would have made things a lot easier. Navigating a single 900-line file is infuriating to say the least. But the job got done, all was well, and I finally had a wearable, functional watch made from an Arduino.
    
    ![Pic of watch working and worn, no battery]()
    
    I also put the code on GitHub. It seemed kinda silly since it was all in one file, but versioning software is still useful even then. I just had a very sad looking repo. TODO ADD LINK

### Battery
    

### Wiring plug

### Android

### Bluetooth

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