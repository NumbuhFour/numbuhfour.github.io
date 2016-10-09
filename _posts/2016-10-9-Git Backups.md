---
layout: post
title: Forgetting to Push with Git
---

I've been tinkering around with my setups related to git lately, and have come up with an idea that I have found insanely helpful. To cut to the chase, I'm using private git repositories for all of my projects (personal and team) in order to never lose a change.


<!--READMORE-->

So the reason I did this was because after commiting a new build to our project's build branch, I ran to the labs at like 11pm to get everything ready for the morning. Only then did I realize I forgot to push.  
Returning home in shame, I was thinking of a way to prevent this problem from ever happening in the future. I thought about automatically pushing things whenever a commit was made, but that would wreak havoc on any team project. But then, it hit me. If I don't have a team, I don't have to worry about. I obviously can't get rid of the team, but I can push to somewhere they can't access. My solution was simple: Using a private git repository on gitlab, I would setup some scripts to automatically force-push everytime I commit to a another remote I named `checkpoint`.  
  
### Step 1: Private Repository

If you aren't already aware, unlike [GitHub](http://github.com/), [GitLab](http://gitlab.com/) offers private repositories for free. While I still very much prefer GitHub for its community, issue tracker, and general website layout, this is a pretty big perk for GitLab.  
  
So nothing special was done, just make a private repository, name it something relevant, and copy the SSH url of the repo. It is important to use SSH (and to have your computer's public SSH key saved in your GitLab account) so that you don't get prompted for a password every time your automatic pushing script fires.

### Step 2: Adding a Second Remote

The easiest part. Navigate to your project folder, and execute the command `git remote add checkpoint [ssh url]`  

This makes your project aware of the GitLab repository you made so that it can be pushed to under the name checkpoint.

### Step 3: Auto-pushing Scripts

Git has this handy little system in place for running scripts whenever an event occured called `hooks`.  
In your project folder, you have a (usually hidden) folder called `.git/`. And inside that, theres a `hooks/` folder.  

This folder contains all the scripts to run whenever a specific event fires. You can check out the list of events [in the git documentation](https://git-scm.com/docs/githooks). When an event fires, the script with the a name that matches the event is executed.  

So for this task, the first thing I did was make a script called `autopush.sh`, which as you'll notice, isn't a hook.

*/.git/hooks/autopush.sh*

``` bash
#!/bin/sh

echo 'Pushing all branches'
# Force push to checkpoint and execute in the background
git push --all -f checkpoint & 
```

Next, I made the actual hook scripts. I picked the events `post-commit`, `post-rebase`, and `post-update` because between them they encompass just about all occurrances of a change. They also all looked the same, because they all just call `autopush.sh`

*/.git/hooks/post-commit /.git/hooks/post-rebase and /.git/hooks/post-update*

``` bash
#!/bin/sh
$GIT_DIR/hooks/autopush.sh
```

And that's it! Every time you make a commit or do a rebase, it should be pushed automatically to your backup remote.

### Notes

This is a great way of both making sure you always have access to your work and backing it up in case something horrible happens to your computer.  One could, of course, just host their own git server, but GitLab is free and always available.  

It is important to keep in mind that this is force-pushing all your branches every time you commit. This means two things:  

  1. Anything you do will override what is there, so make sure if you're on a new computer, you're up to date before you commit.
  2. It doesn't push if you don't commit. If you haven't already built up the habit of committing at every little change rather than in bulk, do that now. It could save your project. Plus, it is good documentaiton. You can always squish an insignificant commit later.

