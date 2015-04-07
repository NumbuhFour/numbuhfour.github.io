---
layout: post
title: Hecklebot
---

### [Check out Hecklebot on Github](https://github.com/fad4470/Hecklebot)

For a little while on and off (mostly off) I've been working on a small project called Hecklebot for a friend of mine. It's an IRC bot written in python meant to monitor and play some games for a [MisterAtomBomb](http://misteratombomb.com/) who recently picked up video game streaming on [Twitch](http://twitch.tv). Keep in mind he didn't ask for this, my motivation was mostly just boredom instead.

To preface, MisterAtomBomb's "tagline" of sorts used to be 'come by and heckle me.' So in the spirit of that, Hecklebot's original function was just randomly spitting out not-very-insulting insults, kinda just fun ones for the sake of laughs, nothing truely mean-spirited. And since it was so small and because it was my first project in python, it was originally written all in one file. That quickly became a problem, but I fixed that despite needing to get used to pythons foreign-to-me variable scoping (specifically requiring self., which got annoying)

Over time and against my expectations, MisterAtomBomb and others actually started liking the idea and started requesting others. Since I had a decent amount of free-time at the time, I took them as challenges. Some of these features include adding FAQ commands at runtime, The biggest and so far most popular feature was King Of the Hill, where viewers type !kingofthehill into the chat to roll to become the reigning king. There really is no reward for being king except for if someone else types !kingofthehill and fails to roll >10, the current king is praised.

I find it's a fun feature. One of the biggest pitfalls of Twitch is a lack of interactivity. Some streamers try to read chat and talk, but it often seems like a burden to manage that plus play the game. [TwitchPlaysPokemon](http://twitch.tv/twitchplayspokemon) enlightened me to the possibilty of Twitch-chat gaming and while kingofthehill may not be of that magnitude, it still adds a degree of play to the viewers. Plus, it encourages people to talk and interact where they may not otherwise, since there is no penalty. 

Hecklebot has mostly fallen on the backburner for now though. It's mostly stable with some rare network-related crashes that I havent quite figured out. I keep it running on a server computer I have and check on it whenever I notice MisterAtomBomb is streaming. However, I don't have a lot of plans to improve it, so until that changes I probably won't be touching the project. 
