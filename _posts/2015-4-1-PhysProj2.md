---
layout: post
title: Physical Media Project2
category: blog
---

![Final result]({{ site.baseurl }}/images/phys2/final1.jpg)

### Premise: 
A interactive experience built into a glove. Using an array of neopixels, a vibration motor, and an accelerometer the idea was to make a glove covered in RGB LEDs light the LEDs on facing up a different color than those facing down. And the vibration motor would power up more as the glove was turned upside-down. 

It was a pretty simple and not very useful idea, but I wanted to get away from utility for this project and just make an experience.

<!-READMORE->

### Building

I planned this out in two parts. A watch-like container and the glove.

#### The Watch
So the watch was by far my favorite part. I was using an old model [Lilypad Arduino](#) which is designed to be small and used with conductive thread. However, I hate the permanence that sewing to the board entails. I wanted to be able to use the board for other projects without permanently dismantling this one. My solution was to design and print a container for the board that would allow me to connect things to it without being permanent.

![Watch image 1]({{ site.baseurl }}/images/phys2/watch1.jpg)

After a few iterations trying to get the sizing right, the fit was perfect. My plan was to lay the arduino inside, use copper tape on a ring of foam aligned with the pin-pads of the Lilypad, then click on a cap to apply pressure to the foam and arduino guaranteeing a solid connection.

![Watch image 2]({{ site.baseurl }}/images/phys2/watch2.jpg)

The only real issue was the fact that I still needed to connect the pins to things... This was why I put a cross bar through the hole on top of the watch. That way I could solder small wires to the copper-tape pads and wire them through the crossbar and out to where they are needed. This presented problems when it came to removing the cap, since some wires were connected to the base of the watch, but it was the only solution I could come up with and if I gave the wires enough slack everything turned out fine.

![Watch image 3]({{ site.baseurl }}/images/phys2/watch3.jpg)

#### The Glove

Since I didn't have any gloves to spare, I had to make one (or at least most of one) using materials I had. Which was leather. Which was not a great idea.

![Glove image1]({{ site.baseurl }}/images/phys2/glove1.jpg)

I only made what I needed, which was basically a strap around the palm with a smaller strap to hold it in place. It held very well and was pretty comfortable. However, what I didn't think about was that I had to sew through this stuff. I have some leatherworking tools and needles, but while that made things easier, it did not make things enjoyable. 

#### The Lights

For the lights I chose [Neopixels](https://www.adafruit.com/categories/168). Neopixels are RGB LEDs which which are strung in a line transferring data so that they only occupy 1 pin on the arduino. This was something I had wished for since highschool.

However, the website was sold out of the Neopixels prefitted with sewing pads, but they had a lot of unmodified pixels for like a 3rd of the price so I figured I could solder some pads on to those as needed. Plus the prefitted ones were a lot bigger.

![Light image1]({{ site.baseurl }}/images/phys2/light1.jpg)

I had some trouble getting them to work. As a result I burned out 3 of them, but fortunately I bought like 10 extra (they were so cheap). It turns out the documentation on which pin is which got me confused and I had it backwards. In my defence the image was looked like the pixel both flipped and not.

My arangement was columns of 3 around the hand for a total of 18 (minus one which had its spot replaced by the accelerometer)

![Light image2]({{ site.baseurl }}/images/phys2/light2.jpg)

They worked really well, and were each as bright as a flashlight. However, my dinky little pads made from curled wire were not very strong and broke off a few times during soldering and during sewing (sometimes the solder-pad on the LED broke off too)

#### The Sewing

As mentioned in [another post]({{ site.baseurl }}/XOWeek/) I didn't have a lot to do over my spring break besides sew.

It was a tedious process but I had a lot of free time. My biggest concern was making sure no wires were touching. The leather was useful since I could needle deeper into the leather to avoid unintentional, but this didn't stop everything. There were still a few places where the ends of wires got free enough to bend over and touch another wire.

![Wiring image1]({{ site.baseurl }}/images/phys2/wiring1.jpg)

#### The Folly

So, by the end of my spring break, I had a nearly complete product. Almost everything was working individually, the only thing left to do was make the actual functionallity and combine the LEDs and accelerometer together through code. Unforunately, on the Sunday before the deadline, the accelerometer stopped respoding properly. After a few hours of tinkering to no avail, I ended up jerry-rigging a sonar distance sensor to make something completely different but functional.

My new idea was to make a glove that would indicate through lights and vibration whenever something got too close.

The lights would go from red to yellow to green whenever something was within about 20" and getting closer. If an object was detected closer than about 6" the vibration motor would start, which caused some issues with the sonar sensor so it had to dampened significantly.

![Folly image 1]({{ site.baseurl }}/images/phys2/folly1.jpg)

This was the final product, not the prettiest thing and definitely not the most robust, but it worked most of the time.

### Postmortem

So, from this my most important lesson is probably not to skimp out on materials. I ran out of a lot of things (conductive thread, insulating paint, a not-leather glove) and didn't bother getting a replacement but instead improvised. However, I do enjoy having a good, working design for a Lilypad case. I foresee that being very useful in the future.
