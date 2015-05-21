---
layout: post
title: Lilywatch Part3&#58; Computers and Code
---

This is a continuation of my previous posts regarding the Lilywatch: A watch built using an Arduino. This post goes over the programming and computer aspects of the device.

Computers and code
	-Programmingggggg
		-Git! and Issues!
		-All one file :(
		-Pretty effects
		-States, binary, and button restrictions
		-refactor to multi file!
	-Android
		-App
			-BlueTerm was open source and pointed to Google examples
			-Edited bluetooth chat example to include intents for messaging via tasker
		-Tasker
			-Editable without computer
			-Handles events from phone
			-Able to call intents to app
	-Bluetooth
		-Wiring nice. Its growing
		%Flipped watch to left hand%
		-Stupid baud rate. Edited settings remotely
		-RSSI and power level
    - Unity experiments
        -To use System.IO.Ports: ProjectSettings > Player settings > Change .Net 2.0 Subset  to .Net 2.0

## Computers and Code

### Arduino
    I call myself primarily a programmer, so this part of the project was the least daunting. However, I have never done anything so big with an Arduino before. I wish I had learned earlier that I could use multiple files, that would have made things a lot easier. Navigating a single 900-line file is infuriating to say the least. But the job got done, all was well, and I finally had a wearable, functional watch made from an Arduino.
    
    ![Pic of watch working and worn, no battery]()
    
    I also put the code on GitHub. At first it seemed kinda silly since it was all in one file, but versioning software is still useful even then. I just had a very sad looking repo. TODO ADD LINK
	
	Significantly later on in the project, I did end up doing a major refactor and splitting all the different modules into their own classes. 
	
	Arduino was mostly OK with this, however I had to use Notepad++ as the actual editor since Arduino's IDE mandated that all the files open in scrolling tabs which was unbearable. Arduino's compiler also didn't seem to like having sub-directories which made me sad, but I managed all the same.
	
	The only real concern I started having was that splitting the files seemed to take up noticeably more memory on the board when uploading. I was at a little more than 50% before the split, and about 70% after. So at least I still had some room, but I had to make sure I considered that whenever I thought about adding more features. Future things were going to have to do the thinking outside the board.
	
	Anyway, the code is structured in such a way so that each "app" or state is its own class and stored in an array in the Lilywatch class. The Lilywatch class is the main overseer of everything, looping through whichever state is the current one and storing references to all the sensors. I also made a class called a daemon. A daemon is typically a program or process that runs in the background. Since Arduino doesn't have multi-threading, these daemons were just like states but they were always running. Daemons handled things like changing the brightness based on light levels or handling input from bluetooth. In comparison states were things like the clock or flashlight states, which were only run while selected.
	
### Android
	To enable communications between the watch and my phone, I had to write some sort of app to relay information to [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm), which I would then use as the main brains behind the watch/phone communications. I did this because 1) I liked the idea of being able to edit things on the fly, without having to return to my computer to reprogram a feature and 2) I am not greatly skilled in Android programming yet. I've been experimenting for a while, but nothing has come out that I'm proud of. 
	
	So the basic plan was: 
		- Obtain a bluetooth connection using my own Android app
		- Pass any incoming messages from the watch to Tasker using that app
		
#### The App
	The app was as simple as I could make it. I compiled what I needed from Google's bluetooth examples and [BlueTerm](https://play.google.com/store/apps/details?id=es.pymasde.blueterm) which was open source.
	
	It wasn't anything pretty to look at, in fact it still just looks like Google's example, but it worked. All it did was establish a connection to the phone and send out / receive intents pertaining to anything related to that bluetooth connection. To put it simply, intents are Android's way of sending messages between its various components. I was going to use these to tell Tasker when new messages from the watch were received and I made Tasker send Intents to my app which detailed messages to send over bluetooth. 
	
#### Tasker
	If you don't know what Tasker is, it is an app that listens to events that happen on your phone and allow you to designate actions to be performed when those events happen. For example, make a popup whenever the clock strikes 12 or vibrate to a pattern when you get a text from a certain person while in a certain location. It has a lot of possibilities. So I made it listen to intents broadcast from my small app and make sent return intents accordingly.
	
	Getting this working was as fun as it was frustrating. This was my first major delve into the mechanics of Tasker, so getting used to the interface was unpleasant, but the results were worth it. Whenever a bluetooth connection to the Lilywatch was reported, Tasker would send a message detailing the current time so that the watch could stay accurate. I also programmed events in using the [Notification Listener](https://play.google.com/store/apps/details?id=com.balda.notificationlistener) plugin so that whenever a notification arrived using the from hangouts(SMS), Google(Reminders), or an alarm went active, Tasker would send corresponding messages to the watch so it can notify me.
	
### Experiments
#### Bluetooth and RSSI
	
#### Unity