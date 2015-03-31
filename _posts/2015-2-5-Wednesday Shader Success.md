---
layout: post
title: Wednesday: Shader Success
---

Even after a few hours of tinkering, my selection shader has managed to stay stable, which is a relief even though I can’t quite pin down how Unity deals with shader properties since it seems to ignore the default value sometimes, and I haven’t found a pattern. Still, I’m starting to get the hang of shaders in general and even made it slightly animated. Though since I’m not sure how most animated shaders work, I don’t know if they way I’m implementing it is ‘standard’ or ‘efficient’ or anything. But, it works. All I did was use shader globals to access a _Timer counter, and then increment that variable via script. It looks kinda nice.

I also finally made the project into a git repo. I should have done it from the beginning but I didn’t think I’d really work on it for more than a day at the time. However, some of the files are being rejected from GitHub because they are too big. I’ll get that fixed tomorrow and post a link.

![Shader Screenshot]({{ site.baseurl }}/images/selectorpreview.gif)