# 
GA project
Step 1-
prepare the html and get the visual side of the project ready

Bootstrap has been used to style the app
1- Jumbotorn to style the header
2- List groups to style list of aadings
3- Input group to style input 

Using Jquery and javascript to design how cards work
1- have a click event and through this even, we capture data entry and append it to the card
2- at the same time, we add the entry value to the first card array
3- used draggable jquery to make each entry draggable
4- used droppable jquery to be able to drop dragged item into droppable place
5- at the same time we drop an card item, item is deleted from first card array and pasted into second card array.

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
## CORE REQUIREMENTS
The Core requirements set out for this project where the following:
* **Models.** A minimum of 3 models with appropriate associations.
* **Views.** Use partial views to avoid DRY practices.
* **Handles invalid data.** Appropriate form handlers to validate data or notify users of invalid data.
* **Use Gems** Include Ruby Gems that utilise API Calls.
* **User Login.** Basic User Authentication
## PLANNING & DELIVERABLES
* **Scope -** AIM: The aim of the project was to build a simple portfolio and stock tracker for the user.
Features: Stock API Call for live data, portfolio customisation, news article search and save for user to re-read, time-series graphs.
Implementation Period: 2 Weeks
## CHALLENGE ADD-ONS (Achieved)
* Using data attributes to be able to recognize item's status in diffrent table after dropping.
* Learned how to create local data storage and how to load it to Dom.
## PROBLEMS FACED
* I didn't know how to bind click event to ('.addItem') class as it was created static through app.js not index.HTML. I finally ended up using event delegation.By delegating an event handler, I could ensure it is executed for ('.addItem') class that did not exist in the DOM at the time of binding. This way the event handler will actually be attached to something and can be executed as appropriate later on.
* 
* JQUERY Framework Conflicts - due to the use of Twitter Bootstrap and the additional complexity of Chartkick, the charts were not displaying correctly hence were removed.
* Lack of knowledge with user models - I feel i did not have a good enough understanding of users/sessions to be able to associate them correctly to the portfolios.
## FURTHER IMPROVEMENTS
* Implement live charts into dashboard view.
* Implement correct association for news and stocks
* Implement correct association for users and portfolios
* Implement autocomplete forms for news and stocks search