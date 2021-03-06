# Furaffinity-Scripts
User scripts written to improve functionality on Furaffinity. Currently existing as seperate scripts, I may combine them into one overall useful script in the future.

# Available Scripts
scripts currently found in this repository

* Notifier - Sends browser notifications for new messages such as comments, notes, and watches.
* Search URL string - adds current search parameters to the address bar allowing one to bookmark or share a search and quickly jump pages.

# Unavailable Scripts
scripts of which I have written, but require fixes or refactoring before I share them.

## Hotkeys 
Adds hotkeys to navigate furaffinity (favoriting, clearing current page of new submissions, etc.) 

**status:** actually mostly works right now, need to fix page navigation on search page as well as gallery navigation on submission pages. I would also like to refactor to remove the use of eval because of my poor data structure for storing hotkeys and actions.

## Gallery Scraper
Retrieves the submission image urls for the given pages of a gallery which can be fed into a download manager. Can also provide detailed metadata for submissions such as keywords, descriptions, and titles. 

**status:** fully functional and available here https://github.com/Adidea/Gallery-Tools it's a bit of it's own project surrounded by it's own tools, so It'll be seperate for now, but it may end up in this tool set eventually. Just needs streamlined a bit.

## Unwatched artists from favorites
Takes the JSON file generated by the gallery scraper and searches for artwork you favorited by artists not on your watch list. Handy for finding artists you forgot to watch or checking up on artists who had drawn something you liked, but the rest of the gallery didn't warrant a watch at the time.

**status:** I assume this still works, but it's a pretty niche tool that requires the metadata file scraped from your favorites. It also only grabs the first page of artists watched, though that's an easy fix.
