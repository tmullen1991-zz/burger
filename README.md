# Eat Da Burger

## What is the App?

Eat-Da-Burger is a basic full-stack webapage that uses express, express-handlebars, MySQL and is deployed via heroku with JawsDB. The app uses a custom ORM rather than sequelize, as an intro exercise to basic routng using MySQL. Checkout the app here! https://pacific-bastion-23235.herokuapp.com/ The basic funsitons of the app are to allow anyone to enter a burger name and add it to a list of burgers that can be eaten with a "Devour it" button associated with each burger. If the button is clicked the burger object is moved to a list of eaten burgers.

## How it Works

The app uses a single MySQL table that adds burgers by name and a boolean value to determine if it has been eaten. SQL commands are handled in a custom ORM.js fial with three basic function for selecting all burgers from the table to be added to the page, inserting a new burger to the database, and updating burgers boolean "eaten" value. 

#### Example SQL code from ORM.js

```
selectAll: function(tableName, cb) {
    connection.query("SELECT * FROM " + tableName + ";", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
```

Burgers are loaded onto the page using handlebars to sepereate eaten vs not-eaten burgers into two different tables. Routing is handled with a get, post and put function corresponding to the custom ORM selectAll, insertOne and updateOne calls.

### Purpose

The point of this exercise was to introduce basic routing functionality using a relational database, more projects are listed below the page with all relational databse projects using sequelize in place of custom commands. Check out this and other projects on my Github! https://tmullen1991.github.io/

![Alt Text](image/burger.png)


The app utilizes express to handle routing and get/post calls for handling data. Two routing files are used, htmlRoutes.js to handle routing between the home and survey pages and apiRouting.js to handle a GET route to reutrn a list of possible matches and a POST route to handle submitted user survey data. The GET call is handled inside of the POST call in order to call a JSON object, store the object, and use it within the GET route containing user data. See the code snippet below for logic or see it in the script at the bottom of survey.html.

### Example of POST/GET Callback

```
// POST route for newFriend data
    $.post("/api/friends", newFriend, function(data) {
        if (data) {
        // GET route used to get JSON of friends to be matched with
        $.ajax({ url: "/api/friends", method: "GET" }).then(function(
            friends
        ) {
```
##### Logic for matching goes here, see script at bottom of survey.html
```          
            // display matched friend's data in a modal for then user to see
            $("#match-name").append(match.name);
            $("#match-photo").attr("src", match.photo);
            $("#match-scores").append("scores: " + match.scores.join(", "));
            });
            // error for POST route
        } else {
        alert("something went wrong");
    }
```
