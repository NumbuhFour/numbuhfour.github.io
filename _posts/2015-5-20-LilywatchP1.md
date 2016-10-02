---
layout: post
title: Lilywatch Part1&#58; Intro
---
### Lilywatch: a smartwatch powered by Arduino

## What is it?

A watch powered by a removable [Lilypad arduino](http://lilypadarduino.org/) and equipped with a bluetooth connection to my android phone.

![1 overview pic]({{ site.baseurl }}/images/lilywatch/1_overview.jpg)

<!-READMORE->

This was a project I started for my Physical Media class that went way off course. The original premise was to make a small device that communicates with another device to create an interesting experience, but I quickly got distracted and made a watch instead (I made an 'experience' app for it too). 

The watch was something I already had rough plans for after designing a housing for a Lilypad during **my last PhysMed  project**(link). At the time, I really just wanted something I could plug my Lilypad into without having it permanently attached to a circuit. I wanted to have it available for other projects should they come up without compromising whatever project I'm taking it from. 

So, with that design already in hand, I took to improving it so I could turn it into a platform on which I could make whatever this 'experience' my next assignment called for. But in doing so, I got side-tracked testing to make sure it could do anything and ended up focusing on turning into a personalized smartwatch. A smartwatch tailored to me and my expectations for how things work.

Over the next few days I will be writing posts on the process of making it and some accompanying projects to document this adventure. The project is not done, it's one of those that I hope to gradually keep adding to over a long span of time, but I will try to keep adding to this blog as well to continue documenting its progress.

## Features
 - Time keeping displayed in binary
 - Lilypad is removable for project swapping or testing
 - EEPROM (with wear-levelling) for config saving
 - Auto-light level (disable-able through config)
 - Notification for when an SMS is received
 - Watch alerts you to phone alarms
 - Contextual control over my livingroom and bedroom music when in range of them
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

## Future Goals and Improvements
My goal now is to make this something worth wearing daily. To have it able to do enough that the bulkiness of it is outweighed by its usefulness. 

At this time though, some major improvements would be 
 - The bluetooth app. I'd like to have it handle more rather than let Tasker handle it all
 - Have a single housing, not the three pieces of the watch, battery and bluetooth separately
 - Arduino coding improvements. I haven't done a lot of research into this, but having all the code in one file is always a taboo
 - Move more control to android. Able to write and control whole states from the phone
 - Point the connection wires away from the wrist. At this time the power and bluetooth connectors are pointed straight where my wrist bends up, and it can be rather obnoxious.
 - The cap currently pops off if the strap is too tight. Perhaps moving the clamps 90&deg; to the would make it a little better.
 - The foam rings acting as the connector pads to the Lilypad wear down too quickly, sometimes requiring some serious pressure when trying to put the board back after taking it out to make the connections stable again.
