# Eat Da Burger

## What is the App?

Eat-Da-Burger is a basic full-stack webapage that uses express, express-handlebars, MySQL and heroku. The app is a simple create, 

Friend-Finder is a basic full-stack webpage using express and heroku. If you want to check out the final product before reading click here! https://serene-brushlands-90227.herokuapp.com/ The app is basically a survey of 10 random questions that will compare the users answers to a list of other users and match the closets scoring friend. It also asks for the users name and a photo link for the users picture.

## How it Works

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
