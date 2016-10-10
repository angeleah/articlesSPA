##Article Feed
This SPA displays the titles and publish dates of the news articles returned from a JSON API. The SPA loads and displays more news articles as the user scrolls.

###Getting Started
Make sure you have Node/npm installed by checking ``` node -v ``` and making sure you have a node version installed. If not, get started with Node [here](https://nodejs.org/en/).

Install the Gulp CLI
``` $ npm install --g gulp-cli ```

Install the Dependencies
``` $ npm i ``` or ``` $ npm install ```

Compile the templates
``` gulp templates ```

Run the project
``` gulp ```

###Decisions and where I would head with this...
#####Testing
I decided not to test.  This is something I usually do. Given the time restrictions,  I decided to focus on making sure I finished the app.

#####Collections
Given more time, I would move the part of the Article list view into a Collection that would handle it's own fetching of the data. This would clean up the view and go with a more conventional Backbone pattern.

#####Loading Detection
I could see possibly moving the loading detection into an ajax before send method and possibly adding a loading gif or text.
