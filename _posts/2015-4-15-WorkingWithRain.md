---
layout: post
title: Working with RAIN (Unity3D)
---

For a course I'm in, we've been covering the topic of behaviour trees for AI in games. They are quite an interesting topic, and I was excited to implement them. However, I was disappointed to find all the most popular behaviour tree implementations in Unity3D cost >$60, which I was unwilling to pay. My professor also felt the same way, as he couldn't find any free implementations either.

So, as I was preparing to make my own implementation, I came across a slightly less popular behaviour tree implementation called [RAIN](http://rivaltheory.com/rain/). At first I was relieved. Before that discovery I was getting ready to write a whole UI, which is no small task. I also found that this tool was used in some titles that I had heard of, namely [SUPERHOT](http://superhotgame.com/) and [Among the Sleep](http://www.krillbite.com/ats/), so I thought it was going to be great. But unfortunately after working with it, I came up with far more problems than progress. 

First of all, the documentation for RAIN was shoddy and full of holes, making the whole process exponentially more difficult. From what I could understand, it seemed like RAIN wanted its users to only use functions built into RAIN. This included detection of objects and movement, which were pretty much the only things I wanted to use. This would have been fine, however despite several hours of experimentation and research, I could not find what I had done wrong which separated my tests from their examples. 

So, to summarize, I would not recommend this. I wish I could, it has great potential, but the lack of proper and full documentation is really a huge bottleneck. 