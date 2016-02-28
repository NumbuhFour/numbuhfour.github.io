---
layout: post
title: Physical Computing&#58; Project3 Writeup
category: blog
---

Premise: Using an arduino, build a simple interactive machine that somehow involves audio whether that is input or output. This was a significanlty smaller project than the last one, and my idea was to detect notes made by whistling.

However, through experimentation, that goal changed to detecting notes made by an instrument. Instruments can make a much more consistent and clean noise compared to whistling via mouth, making detection easier.

Implementing an FFT algorithm wasn't too difficult using libraries available. They were interesting to read up on since anything dealing with audio aiming to be functional must keep the sample rate high since audio is just really fast waves essentially, and so the code that managed the FFT didn't bother using many of the normal functions for getting input from pins. Instead they used variables built in to grab values from the analog pin and optimize speed. 

#Fitting the FFT to work for me
