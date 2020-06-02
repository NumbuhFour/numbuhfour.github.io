---
title: PsychoTwitch
excerpt: A Node.js webapp to assist users of Twitch.tv in finding games to watch and stream
preview: /heroku-logo.png
tags:
  - Project
  - WebDevelopment
  - Node.js
  - Javascript
  - Heroku
  - MongoDB
  - Twitch.tv
timestamp: July 2015
---

The premise of this project was to create an algorithm based off the traffic of viewers versus streamers for each game being played on the game streaming website [Twitch.tv](http://twitch.tv). It was a simple personal project that started when a friend of mine had the neat idea and I thought it'd be interesting to work on. We worked on it for the majority of the summer, but unfortunately/fortunately that friend got a job half way through and was no longer able to work on it with me.

By that time, the majority of the functionality was out of the way. It was designed as a RESTful API that would continually poll Twitch's servers for game and viewer information, store it on a Mongo database, and run it through an algorithm to find which games currently had the best viewer/streamer ratio. Then the website would be designed to request that info and build its webpage to display the data. However, I am not a strong web *designer*, so when he left, the beauty of the webpages went as well.

The algorithm itself was fairly straightforward, though written knowing that it may need to be swapped out or improved later. Basically, it just took the viewer-to-streamer ratio to find games that had a lot of viewers, but not a lot of streamers. That way up-and-coming streamers could find games with a high demand but low supply of streamers. We also made it to store that information to the database to build a graph of when the best times to stream what games were.
