# Spotifind

## Synopsis

This project takes you on a user-friendly walkthrough of the 5 out of the 7 RESTful API requests in the following order: GET-index, POST-create, GET-show, PUT-update, GET-show, DELETE-destroy, GET-index.

## Motivation

This project is for the TTP/Spotify Code Challenge. The instructions are:

```
To complete this question you will need to write both a client and a server. We are agnostic to how you design the client (mobile web, iOS, Android, desktop web) but it will need to be able to make HTTP requests to a specific endpoints.  The server you create will also need to be able to respond to HTTP requests to specific endpoints.  It is not important what language or framework you use to build your server.

The client should do the following in order
Make a GET request to /people
Make a POST request to /people
Please make the person object have the following attributes: id, name : “Sean”, favoriteCity : “New York”
Make a GET request to retrieve the object created in the previous request
Make a PUT request to /people and modify the attribute city to be “Brooklyn”
Make a GET request to /people/1
Make a DELETE request to /people/1
Make a GET request to /people

Using restful principles, decide how the server should handle each request including responding with the appropriate JSON.  We are intentionally being vague about what exactly each request should do on the server.  We want you to use your best guess as to how other programmers might expect your API to behave.

Please deploy your server to heroku and give us the address.  Please give us instructions on how your client will make the required requests to your server.
```

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

pull down git repository
```
git clone https://github.com/jin501/SpotifyChallengeClient.git
```

OR

Visit the heroku page: ```spotify-challenge-client.herokuapp.com```

### Usage

If you cloned down from the github repo, open your terminal and change into the project directory. You may need to run ```npm install```

Once finished, in your terminal, run
```
npm start
```
This will start a local server (http://localhost:3000/ by default).


If you are on the website or running the client application on your local server, follow the directions, and click button to go through the walkthrough. It is recommended you open up your console and enable ```Log XMLHttpRequests``` in your console settings to fully "see" the requests in action.


## Built With
Client side:
* React
* JavaScript
* HTML5
* CSS

Server side:
* Ruby
* Rails
* PostgreSql

## Author

* **Sol Jin**
