---
layout: post
title: Vim is Fun
---

Over the summer in my off time or whenever I was waiting for something to do, I invested some of my effort into learning the wizard-like editor known as Vim.  
This post will serve as a reminder to myself for all the commands I find most useful in everyday situations.

<!--READMORE-->

## Impressions

For the most part, I've always been dependent on nano for my in-terminal text editing. It's simple and quick not requiring a lot of thought. But vim was so enticing. I enjoy the fast pace that comes with knowing a lot of keyboard shortcuts, and vim is nothing but that. Now I end up looking for vim plugins for just about every text editor I use. I really feel like every time I use it, I'm getting a little better, and with that, a little faster. It is also really enjoyable to think "I wonder if there is a way to do this already" and end up finding another trick to add to my repertoire. So this list is all the commands I've found to date which have made me love using vim over every other editor.

## Commands

| Key Combo | Function |
| --------- | -------- |
| :mks! | Saves the current vim session (all open files and whatnot) to a file called Session.vim |
| :s/[search]/[replace] | Search for text and replace it on this line only |
| :%s/[search]/[replace]/g | Search for text and replace every instance in every line | 
| /[search] | Search for text in file |
| n | Go to next result of search |
| :tabe [file] | Open file in new tab |
| g t | Go to next tab |
| g T | Go to previous tab |
| m [key] | Mark line as almost a bookmark to given key |
| ' [key] | Jump to the mark location assigned to that key |
| ' ' | Jump back after jumping to mark |
| ` . | Jump to location of last edit |
| :vsp [file] | Open file in new tab, but split the tab vertically |
| CTRL + w CTRL + w | Go to other file within this tab |
| :e . | Open current directory, which lets you explore files |
| :![command] | Run a command in the shell |
| :map [key] [command] | Bind a key to an action, useful for building. Ex: `:map <F5> :!node test<CR>` |
| y y | Yank (like copy) a line |
| p | Paste last yank |
| " x y y | Yank current line to buffer `x` |
| " x p | Paste line from buffer `x` |
| zf[movement] | Make a fold from cursor to movement |
| za | Toggle fold |
| zM | Close all folds |
| zR | Open all folds |
| zd | Delete fold |
