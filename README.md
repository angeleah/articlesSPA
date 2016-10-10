##Article Feed
This SPA displays the titles and publish dates of the news articles returned from a JSON API. The SPA loads and displays more news articles as the user scrolls.

###Getting Started
Make sure you have Node/npm installed by checking ``` node -v ``` and making sure you have a node version installed. If not, get started with Node [here](https://nodejs.org/en/).

Install the Gulp CLI
```sh
npm install --g gulp-cli
```

Install the Dependencies
```sh
npm install
```

Compile the templates
```sh
gulp templates
```

Run the project
```sh
gulp
```

###Decisions and where I would head with this...
#####Testing
I decided not to test.  This is something I usually do. You may have noticed via my commit messages that I started with a suite setup and then removed it. Given the time restrictions,  I decided to focus first on making sure I set up the app and completed the required functionality.

#####Collections
Given more time or a larger project scope, I could see moving the part of the ArticleListView into a Collection that would handle it's own fetching of the data. This would clean up the view and go with a more conventional Backbone pattern.  If the project was larger, I would also add a Dispatcher to ensure separation of concerns and make sure that views did not become coupled.

#####Loading Detection
I could see possibly moving the loading detection into an ajax before send method and possibly adding a loading gif or text.
