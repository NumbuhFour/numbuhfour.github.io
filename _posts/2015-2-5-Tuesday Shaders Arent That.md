---
layout: post
title: Tuesday: Shaders Aren't That Hard, Unity's UI Might Be.
---

After spending a good chunk of the day playing with and learning Unity’s shaders trying to get a CCTV refresh lines effect and an outline, I spent almost the entire rest of the day wrestling with Unity’s 4.6 UI system and learning the hard way that python can be mean. Unity’s new UI system is actually rather nice, especially compared to its old onGUI system, but there doesn’t yet seem to be any clean way to convert world coordinates to UI coordinates. World coordinates to screen coordinates work well, but unfortunately they don’t seem to be the same.

However, python was a ruthless vixen to deal with, since I am not fully familiar with how it deals with scope regarding globals. I spent far too long trying to figure out when python thinks variables are global and when they are local. Plus I think I had my first run in with incorrect whitespace character errors since that’s the only explanation I can come up with for that trouble. That was 2 hours I’ll never get back, but hopefully will never have to lose again. I wish I had set that project up on git sooner, maybe that never would have happened.