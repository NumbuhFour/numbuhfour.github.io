---
layout: post
title: Vim is Fun
---

Over the summer in my off time or whenever I was waiting for something to do, I invested some of my effort into learning the wizard-like editor known as Vim.  
This post will serve as a reminder to myself for all the commands I find most useful in everyday situations.

<!--READMORE-->

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
| '[key] | Jump to the mark location assigned to that key |
| ' ' | Jump back after jumping to mark |
| ` . | Jump to location of last edit |
| :vsp [file] | Open file in new tab, but split the tab vertically |
| CTRL + w | Go to other file within this tab |
| :e . | Open current directory, which lets you explore files |
| :![command] | Run a command in the shell |
| :map [key] [command] | Bind a key to an action, useful for building. Ex: `:map <F5> :!node test<CR>` |
