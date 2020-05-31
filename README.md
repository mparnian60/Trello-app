# PROJECT #1 - Trello-app
## Project Overview
The Overview of this project was to create a simple Trello app to be used to organizes and manage projects/tasks. Making different cards anable user to be able to track tasks progress in terms of what's the list of tasks that needs to be done, which task is in prgress and whwihc one has been completed. 
Imagine a white board, filled with lists of sticky notes, with each note as a task.

## TECHNOLOGIES & RESOURCES USED
* HTML5
* CSS
* Javascript
* Jquery
* Bootstrap
* JSON

## FEATURES
* User can name the whole board and alse name each cards based on the type of project.
* User is able to add as much card as needed.
* User is able to drag and drop each card between different lists.
* Appropriate alert to notify users of empty inputs.
* Data entry is saved in the local storage which enable user to retrive entered data and not lose it.
* Progeam is responsive to diffrent screen size.

## CHALLENGE ADD-ONS (Achieved)
* Using data attributes to be able to recognize item's status in diffrent table after dropping.
* Creating local data storage and load them back in to the Dom.

## PROBLEMS FACED
* I didn't know how to bind click event to ('.addItem') class as it was created static through app.js not index.HTML. I finally ended up using event delegation.By delegating an event handler, I could ensure it is executed for ('.addItem') class that did not exist in the DOM at the time of binding. 
* Drop didn't work for loaded data from local storage. Problem has been solved by addig condition.
* Cards styling had some issue and cards where collapse at the top of each other in medium size screen because each card had a fixed width whihc didn't respond to screen size, by removing the fix with, problem has been solved.
## FURTHER IMPROVEMENTS
* Delete non essential tasks.
* Add modals to each card to be able to create description about each task.