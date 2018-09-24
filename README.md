# restaurant-reviews.github.io

Restaurant Reviews is a very important project developed during the Advanced Nanodegree Front-End Web Developer course, and was created to implement a system responsible to show restaurants and their details around a certain region. This project has as the greatest goal to implement a very accessable and mobile responsive website. Additionally, it was implemented the Services Worker manually.

## Important
It was provided by Udacity a raw version of the project, which was improved to get the course [specifications](https://github.com/udacity/mws-restaurant-stage-1/blob/master/README.md) done.

## How to use

Download the project directly or go to a specific folder and download it by git:

* `git init`

* `git clone https://github.com/pedroarvellos/restaurant-reviews.github.io.git`

To run this project in a quite simple way, you can use the Python local Server. In ths case, you can follow the instructions:

1. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8080` (or some other port, if port 8080 is already in use.) For Python 3.x, you can use `python3 -m http.server 8080`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

One other option is to use a simple and zero-configuration command-line node http server. To get this one, you just need to have node installed, and follow [this](https://www.npmjs.com/package/http-server) prescription;

2. With your server running, visit the site: `http://localhost:8080`(note, it is important to run in the 8080 port), and look around for a bit to see what the current experience looks like.

## What You're Getting
```bash
├── CODEOWNERS
├── README.md - This file.
├── index.html
├── restaurant.html
├── ServiceWorker.js
├── css
│   │   ├── styles.css
│   │   ├── media-query
│   |   │   ├── index-media-query.css
│   │   │   ├── restaurant-media-query.css
│   │
│   data
│   │   ├── restaurants.json
│   │   ├── index.css
│   │
│   img
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   ├── 4.jpg
│   │   ├── 5.jpg
│   │   ├── 6.jpg
│   │   ├── 7.jpg
│   │   ├── 8.jpg
│   │   ├── 9.jpg
│   │   ├── 10.jpg
│   │
│   js
│   │   ├── dbhelper.js
│   │   ├── main.js
│   │   ├── restaurant_info.js

The project can be opened in any text editor, for example: _Sublime Text_, _Visual Studio_,  _Atom_, etc. To execute the project.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.