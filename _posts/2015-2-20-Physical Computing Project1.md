---
layout: post
title: Physical Computing: Project1 Writeup
---

Premise: Using an arduino, build a simple interactive machine that utilizes a minimum of three sensors. My project idea was to create a character with two RGB LEDs for eyes. The sensors I used were a ultrasonic rangefinder, accelerometer, a bluetooth radio, and a potentiometer (just to dim the LEDs).

The character, nicknamed Fido, interacts by showing its current emotion with the color of its eyes. Green means happy, red means mad, and white means bored.

Whenever someone is within about 30 cm of the rangefinder, Fido registers as happy. Otherwise, Fido gets bored. If Fido is shaken, he gets mad until someone apologizes. Apologies are input by typing “sorry” through a bluetooth connection. And lastly, if someone waves their hand in front of his face (rangefinder), he blinks yellow and says hello.

Overall it was a pretty simple project, the first feature I worked on was the detection of presence with the rangefinder. My rangefinder had several different options for input including analog, PWM, and TX/RX. I couldn’t find any good documentation for TX/RX, and PWM yielded jumpy and ugly numbers, so I went with analog. The bluetooth module didn’t cause many issues, it just had a TX/RX that would report any messages received over the radio, though it did have a protocol I had to look into. The module was something I had laying around at home from previous experiments, so I had some experience with it going in. The accelerometer was much the same in that I had no issues, again it was something I had messed around with and could get to work with ease.