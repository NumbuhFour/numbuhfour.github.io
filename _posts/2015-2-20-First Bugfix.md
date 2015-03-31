---
layout: post
title: First Bugfix!
tags: [ "Old Blog", "Class", "HFOSS" ]
---

I have just gotten done sending in my first patch to an open-source project and man am I relieved. Looking at this goal a week ago I thought it would be fun, but the more I thought about it and the more I tried to do this the more daunting the task became.
I knew it wouldn’t be easy, but the full weight of the task didn’t hit me until I realized that even once I found a project (one I understood in a language I knew), I would have to build a programmer’s map in my head detailed enough to find a file causing a given bug and any associated files that might be affected by changes. And that had me terrified. Debugging code can already be a challenge, but picking up someone else’s project, especially a project that could have been accumulating code for years, would require learning everything that the project does as you search for where a problem could be. It was not something I thought could be well done in a week.

After many hours of searching issue listings, FIXMEs, and TODOs I came across a simple TODO in openstreetmap‘s website repository that just asked that a save button change to “publish” when making a new diary and “save” when editing. After finally getting a copy of the project up and running on my box, I then realized that ruby on rails was absolute greek to me. But I powered through. Mostly motivated by the fact that I successfully setup and ran the repo, (I had tried and failed with 2 other projects and did not want to go through it again), I figured out the basic syntax of rails, at least enough to fix the issue. I am still not sure if what I did was as efficient or professional as it could be, but as I filled in the pull-request, I figured that after all my stressing, that could be something for upstream to decide. 
And with that thought I realized that it didn’t really matter if I didn’t understand the whole project and ever facet of it, I just needed to understand enough to contribute. If there was an issue, someone more experienced will step in later on and improve what I had done, and that’s just how open-source development works.

I would like to keep doing this. When I first heard about it I got kind of excited as though it could be something I could just do here and there in my free time. I probably can’t expect to be that carefree about it, but now it’s something that I don’t look at as though the weight of the entire project would rest on my shoulders should I choose to take part. I’ll try to browse Github a bit more from now on and see if there isn’t anything I can do to help some people.

Here’s the [Pull Request](https://github.com/openstreetmap/openstreetmap-website/pull/903) by the way.