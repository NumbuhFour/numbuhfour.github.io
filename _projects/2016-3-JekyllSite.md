---
title: This Jekyll blog
excerpt: A website hosted with GithubPages using the Jekyll static website generator. Something completely new for me.
preview: /jekyll_blog_preview.png
tags:
  - Jekyll
  - Github
  - WebDevelopment
timestamp: March 2016
---

I set up this blog about a year ago as a means of documenting projects for classes after getting fed up with Wordpress.

Wordpress worked for a while. What it does, it does well, and that is creating a basic blog. But for my entire time using it, I was desperate for more control over the format and implementation which it just wasn't able to provide. When I lost access to my account, it was the final straw. So I moved everything over to a basic Jekyll site forked from [Jekyll-now by Barry Clark](https://github.com/barryclark/jekyll-now).

After a bit of tinkering I was happy. It let me control the format and sitemap with the added bonus of git integration. At the time I also maintained a portfolio website separately. It was just an Apache server with hand-written webpages, and it wasn't a great thing, but it did its job. Recently, I have lost my ability to maintain that, so I decided to revamp this Jekyll site to include my projects and portfolio.

It should be noted that I have no prior experience with Jekyll or Ruby, but after hours of experimenting and testing, I think I've gotten it down. I've gotten Jekyll to behave as I want with two more separate collections for projects and experiments. Jekyll is great, but I've discovered it has a lot of limitations, especially when run through GithubPages (though that's due to understandable security concerns). Jekyll seems to be an odd mix between targeting programmers and targeting designers. The former of which tends to want control and explicit declaration of everything, the latter on the other hand wants technical aspects to be setup by default. The result of which has required me to do some odd workarounds.

For example, this site has two collections: projects and experiments, anything not included is a standard blog post. Anything in those collections are, by default, set to be hidden from the post list. The reason for this is because the built-in pagination is not designed with collections in mind, and iterates through all posts to build its pages of posts without regard to their locations. I'd rather have all three be their own collection, and have the pagination module run on all three individually. Overall I'm still happy with it. It's still better than Wordpress in terms of control, and better than an Apache server in terms of development ease.
